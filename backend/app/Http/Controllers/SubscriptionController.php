<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Laravel\Cashier\Cashier;
use Stripe\Exception\ApiErrorException;

class SubscriptionController extends Controller
{
    public function create(Request $request): JsonResponse
    {
        // Valider les données d'entrée
        $validator = Validator::make($request->all(), [
            'payment_method' => 'required',
            'plan_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'message' => $validator->errors()], 400);
        }

        // Vérifier si l'utilisateur est authentifié
        $user = $request->user();
        if (!$user) {
            return response()->json(['status' => 'error', 'message' => 'Utilisateur non authentifié'], 401);
        }

        // Récupérer les valeurs des champs
        $paymentMethod = $request->input('payment_method');
        $planId = $request->input('plan_id');

        try {
            // Créer le client Stripe pour l'utilisateur
            $user->createAsStripeCustomer();

            // Créer l'abonnement avec le plan et le mode de paiement
            $user->newSubscription('default', $planId)->create($paymentMethod);

            return response()->json(['status' => 'success']);
        } catch (ApiErrorException $e) {
            // Gérer les erreurs Stripe spécifiques
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 400);
        }
    }

    /**
     * @throws ApiErrorException
     */
    public function getPlans(): JsonResponse
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
