<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    public function checkSubscription(Request $request)
    {
        $userId = $request->input('userId');

        // Effectuer la logique de vérification de l'abonnement de l'utilisateur
        $user = User::find($userId);

        if (!$user) {
            // L'utilisateur n'existe pas
            return response()->json([
                'isActive' => false,
                'message' => 'Utilisateur introuvable.',
            ], 404);
        }

        // Vérifier si l'utilisateur a un abonnement actif
        if ($user->subscription_active) {
            return response()->json([
                'isActive' => true,
                'message' => 'L\'abonnement de l\'utilisateur est actif.',
            ]);
        } else {
            return response()->json([
                'isActive' => false,
                'message' => 'L\'abonnement de l\'utilisateur est inactif.',
            ]);
        }
    }
}
