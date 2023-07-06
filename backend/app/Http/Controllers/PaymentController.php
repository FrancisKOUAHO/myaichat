<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Payment;
use App\Models\Plan;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Stripe\Exception\ApiErrorException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class PaymentController extends Controller
{
    /**
     * @throws ApiErrorException
     */
    public function checkout(Request $request, $plan_id): JsonResponse
    {
        $plan = Plan::find($plan_id);
        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));

        $lineItems = [[
            'price' => $plan->st_plan_id,
            'quantity' => 1,
        ]];

        $session = \Stripe\Checkout\Session::create([
            'payment_method_types' => ['card'],
            'customer_email' => Auth::user()->email,
            'line_items' => $lineItems,
            'mode' => 'subscription',
            'subscription_data' => [
                'trial_from_plan' => true,
            ],
            'success_url' => route('checkout.success', [], true) . "?session_id={CHECKOUT_SESSION_ID}",
            'cancel_url' => route('checkout.cancel', [], true),
        ]);

        $order = new Order();
        $order->status = 'unpaid';
        $order->total_price = $plan->price;
        $order->session_id = $session->id;
        $order->user_id = auth()->user()->id;
        $order->save();

        $user = auth()->user();
        $user->plan_id = $plan->id;
        $user->save();

        return response()->json([
            'url' => $session->url
        ]);
    }

    public function success(Request $request): RedirectResponse
    {
        $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET'));
        $sessionId = $request->get('session_id');

        try {
            $session = $stripe->checkout->sessions->retrieve($sessionId);

            if (!$session) {
                throw new NotFoundHttpException();
            }

            $order = Order::where('session_id', $session->id)->first();
            if (!$order) {
                $user = auth()->user();
                $user->plan_id = null;
                $user->save();

                throw new NotFoundHttpException();
            }

            if ($order->status === 'unpaid') {
                $order->status = 'paid';
                $order->save();
            }

            $payment = new Payment();
            $payment->order_id = $order->id;
            $payment->st_cus_id = $session->customer;
            $payment->st_sub_id = $session->subscription;
            $payment->st_payment_intent_id = $session->payment_intent;
            $payment->st_payment_method = $session->payment_method_types[0];
            $payment->st_payment_status = $session->payment_status;
            $payment->date = $session->created;
            $payment->save();

            return redirect()->away('http://localhost:3030/payment/success');
        } catch (\Exception $e) {
            throw new NotFoundHttpException();
        }
    }

    public function cancel(): RedirectResponse
    {
        return redirect()->away('http://localhost:3030/dashboard');
    }

    public function getPaymentStatus(Request $request): JsonResponse
    {
        $user = $request->user();

        $order = Order::where('user_id', $user->id)->first();

        if (!$order) {
            return response()->json([
                'message' => 'Order not found.'
            ], 404);
        }

        $payment = $order->payment;

        if (!$payment) {
            return response()->json([
                'message' => 'Payment not found.'
            ], 404);
        }

        return response()->json([
            'payment_status' => $payment->st_payment_status
        ]);
    }
}
