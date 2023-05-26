<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function processPayment(Request $request): JsonResponse
    {
        // Récupérer l'utilisateur
        $user = User::find($request->user()->id);

        // Ici, vous implémenteriez la logique pour traiter le paiement.
        // Si le paiement est réussi, vous mettez à jour has_paid.

        $paymentSuccessful = true;  // Ceci est un placeholder. Remplacez par la logique de votre fournisseur de paiement.

        if ($paymentSuccessful) {
            $user->has_paid = true;
            $user->save();
        }

        return response()->json([
            'payment_status' => $paymentSuccessful ? 'success' : 'failure'
        ]);
    }
}

