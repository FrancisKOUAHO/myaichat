<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Http\JsonResponse;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class AuthController extends Controller
{
    public function requestLoginLink(Request $request): JsonResponse
    {
        // Validation des champs
        $fields = $request->validate([
            'email' => 'required|string|email',
        ]);

        // Recherche de l'utilisateur ou création d'un nouveau
        $user = User::firstOrNew(['email' => $fields['email']], [
            'magic_link_token' => Str::random(60),
            'magic_link_token_expires_at' => now()->addMinutes(30) // Définir l'expiration du jeton
        ]);

        // Envoi de l'email
        $this->sendLoginEmail($user);

        return response()->json(['message' => 'Veuillez consulter votre boîte de réception pour vous connecter.'], 200);
    }

    protected function sendLoginEmail(User $user): void
    {
        // Inclure le jeton en tant que paramètre dans l'URL du tableau de bord
        $dashboardUrl = '/dashboard?token=' . $user->magic_link_token;

        $emailContent = "Veuillez cliquer sur le lien suivant pour vous connecter et accéder à votre tableau de bord : $dashboardUrl";

        Mail::raw($emailContent, function ($message) use ($user) {
            $message->to($user->email)->subject('Lien de connexion');
        });
    }

    public function loginWithToken(Request $request, $token)
    {
        try {
            $user = User::where('magic_link_token', $token)
                ->whereNotNull('magic_link_token_expires_at')
                ->where('magic_link_token_expires_at', '>=', now())
                ->firstOrFail();

            // Connecter l'utilisateur
            auth()->login($user);

            // Réinitialiser les tokens
            $user->magic_link_token = null;
            $user->magic_link_token_expires_at = null;
            $user->save();

            $dashboardUrl = '/dashboard'; // L'URL réelle de votre tableau de bord

            $response = [
                'message' => 'Connecté avec succès.',
                'user' => $user,
                'redirect' => $dashboardUrl
            ];

            return response()->json($response, 200);

        } catch (ModelNotFoundException $e) {
            return response()->json([
                'message' => 'Jeton de connexion invalide ou expiré.'
            ], 401);
        }
    }

}
