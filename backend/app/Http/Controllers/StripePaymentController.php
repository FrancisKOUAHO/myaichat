<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Checkout\Session;
use Stripe\Exception\ApiErrorException;
use Stripe\Stripe;
use Stripe\Webhook;

class StripePaymentController extends Controller
{
    public function __construct(readonly string $clientSecret, readonly string $webhookSecret)
    {
        Stripe::setApiKey(env('STRIPE_SECRET'));
        Stripe::setApiVersion('2022-11-15');
    }

    /**
     * @throws ApiErrorException
     */
    public function startPayment(Request $request): string
    {
        $price = $request->get('price');

        $session = Session::create([
            'line_items' => [
                [
                    'price' => $price,
                    'quantity' => 1,
                ],
            ],
            'mode' => 'subscription',
            'success_url' => 'https://example.com/success',
            'cancel_url' => 'https://example.com/cancel',
        ]);

        return response()->json(['id' => $session->id]);
    }

    public function webhook(Request $request): void
    {
        $payload = $request->getContent();
        $sigHeader = $request->server('HTTP_STRIPE_SIGNATURE');
        $event = null;

        try {
            $event = Webhook::constructEvent($payload, $sigHeader, $this->webhookSecret);
        } catch (\UnexpectedValueException $e) {
            // Invalid payload
            http_response_code(400);
            exit();
        } catch (\Stripe\Exception\SignatureVerificationException $e) {
            // Invalid signature
            http_response_code(400);
            exit();
        }

        // Handle the checkout.session.completed event
        if ($event->type == 'checkout.session.completed') {
            $session = $event->data->object;

            // Fulfill the purchase...
            $this->fulfillOrder($session);
        }

        http_response_code(200);
    }
}
