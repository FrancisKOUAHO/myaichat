<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Laravel\Cashier\Cashier;
use Stripe\Exception\ApiErrorException;

class SubscriptionController extends Controller
{
    public function create(Request $request)
    {
        $user = $request->user();
        $paymentMethod = $request->input('payment_method');
        $planId = $request->input('plan_id'); // l'utilisateur sélectionne un plan et vous passez l'id du plan ici

        try {
            $user->newSubscription('default', $planId)->create($paymentMethod);
            return response()->json(['status' => 'success']);
        } catch (\Exception $e) {
            // Handle the error
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 400);
        }
    }


    /**
     * @throws ApiErrorException
     */
    public function getPlans()
    {
        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        $plans = \Stripe\Plan::all();

        return response()->json($plans);
    }

    public function checkSubscription(Request $request): JsonResponse
    {
        // Récupérez l'id utilisateur ou autre identifiant unique depuis la requête
        $userId = $request->get('user_id');

        // Localisez l'utilisateur avec l'identifiant fourni
        $user = User::find($userId);

        // Vérifiez si l'utilisateur a un abonnement actif
        if ($user->subscribed('default')) {
            return response()->json(['status' => 'subscribed']);
        } else {
            return response()->json(['status' => 'not_subscribed']);
        }
    }
}
