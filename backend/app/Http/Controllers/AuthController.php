<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function requestLoginLink(Request $request): JsonResponse
    {
        // Validation des champs
        $fields = $request->validate([
            'email' => 'required|string|email',
        ]);

        // Recherche de l'utilisateur ou mise à jour de l'existant
        $user = User::updateOrCreate(
            ['email' => $fields['email']],
            [
                'magic_link_token' => Str::random(60),
                'magic_link_token_expires_at' => now()->addMinutes(30) // Définir l'expiration du jeton
            ]
        );

        // Envoi de l'email
        $this->sendLoginEmail($user);

        return response()->json(['message' => 'Veuillez consulter votre boîte de réception pour vous connecter.'], 200);
    }

    protected function sendLoginEmail(User $user): void
    {
        $magicLinkToken = $user->magic_link_token;
        $magicLink = url("/login/{$magicLinkToken}"); // Génère l'URL directement

        // Envoyer l'email contenant le lien magique
        Mail::raw("Cliquez sur le lien suivant pour vous connecter : $magicLink", function ($message) use ($user) {
            $message->to($user->email)->subject('Lien de connexion');
        });
    }

    public function loginWithToken(Request $request, $token): JsonResponse
    {
        try {
            $user = User::where('magic_link_token', $token)
                ->whereNotNull('magic_link_token_expires_at')
                ->where('magic_link_token_expires_at', '>=', now())
                ->firstOrFail();

            // Connecter l'utilisateur
            Auth::login($user);

            // Réinitialiser les tokens
            $user->magic_link_token = null;
            $user->magic_link_token_expires_at = null;
            $user->save();

            return response()->json(['message' => 'Connecté avec succès.', 'user' => $user], 200);

        } catch (ModelNotFoundException $e) {
            return response()->json(['message' => 'Jeton de connexion invalide ou expiré.'], 401);
        }
    }

    public function logout(Request $request): JsonResponse
    {
        Auth::logout();
        Session::flush();

        return response()->json(['message' => 'Déconnecté avec succès.'], 200);
    }
}
