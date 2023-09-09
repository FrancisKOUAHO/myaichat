<?php

namespace App\Http\Controllers;

use App\Models\ShopifyStore;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function getPlanByShopifyUrl(Request $request): JsonResponse
    {
        try {
            $shopifyUrl = $request->input('shopify_url');

            $shopifyStore = ShopifyStore::where('url', $shopifyUrl)->first();

            if (!$shopifyStore) {
                return response()->json(['message' => 'Boutique Shopify non trouvée'], 404);
            }

            $user = $shopifyStore->user;

            if ($user && $user->plan) {
                $allowedResponses = $user->plan->allowed_responses;

                return response()->json([
                    'user' => $user,
                    'plan' => $user->plan,
                    'allowed_responses' => $allowedResponses,
                ]);
            }

            return response()->json(['message' => 'Utilisateur non trouvé ou sans plan associé'], 404);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erreur interne du serveur'], 500);
        }
    }
}
