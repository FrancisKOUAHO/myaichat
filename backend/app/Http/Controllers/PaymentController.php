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
                'trial_period_days' => 15,
            ],
            'allow_promotion_codes' => true,
            'success_url' => route('checkout.success', [], true) . "?session_id={CHECKOUT_SESSION_ID}",
            'cancel_url' => route('checkout.cancel', [], true),
        ]);

        $user = auth()->user();

        // Vérifiez si l'utilisateur a déjà un enregistrement dans la base de données
        $existingOrder = Order::where('user_id', $user->id)->where('status', 'unpaid')->first();

        if ($existingOrder) {
            // Mettez à jour l'enregistrement existant avec les nouvelles informations du paiement
            $existingOrder->total_price = $plan->price;
            $existingOrder->session_id = $session->id;
            $existingOrder->save();
        } else {
            // Créez un nouvel enregistrement
            $order = new Order();
            $order->status = 'unpaid';
            $order->total_price = $plan->price;
            $order->session_id = $session->id;
            $order->user_id = $user->id;
            $order->save();
        }

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

            $payment = new Payment();
            $payment->order_id = $order->id;
            $payment->st_cus_id = $session->customer;
            $payment->st_sub_id = $session->subscription;
            $payment->st_payment_intent_id = $session->payment_intent;
            $payment->st_payment_method = $session->payment_method_types[0];
            $payment->st_payment_status = $session->payment_status;
            $payment->total = $order->total_price;
            $payment->date = $session->created;

            $trialEndDate = now()->addDays(15);
            $payment->trial_end = $trialEndDate;

            $payment->save();

            if ($order->status === 'unpaid') {
                if (now()->lt($order->payment->trial_end)) {
                    $order->status = 'trial';
                } else {
                    if ($session->payment_status === 'paid') {
                        $order->status = 'paid';
                    } else {
                        $order->status = 'unpaid';
                    }
                }
                $order->save();
            }

            return redirect()->away('https://app.myaichat.io/dashboard');
        } catch (\Exception $e) {
            throw new NotFoundHttpException();
        }
    }

    public function cancel(): RedirectResponse
    {
        return redirect()->away('https://app.myaichat.io/dashboard/subscription');
    }

    public function getPaymentStatus(Request $request): JsonResponse
    {
        $user = $request->user();

        // Vérifier si l'utilisateur est authentifié
        if (!$user) {
            return response()->json([
                'message' => 'User not authenticated.'
            ], 401); // Utilisateur non authentifié, code 401 Unauthorized
        }

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
            'payment_status' => $payment,
            'order' => $order
        ]);
    }

}
