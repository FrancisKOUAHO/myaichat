<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    public function register(Request $request): JsonResponse
    {
        $fields = $request->validate([
            'email' => 'required|string|unique:users,email',
        ]);

        $verificationToken = Str::random(60);

        $user = User::create([
            'email' => $fields['email'],
            'verification_token' => $verificationToken,
        ]);

        $this->sendLoginEmail($user);

        return response()->json(['message' => 'Inscription réussie. Veuillez consulter votre boîte de réception pour vous connecter.'], 201);
    }

    protected function sendLoginEmail(User $user): void
    {
        $loginUrl = route('login', ['token' => $user->verification_token]);

        $emailContent = "Veuillez cliquer sur le lien suivant pour vous connecter à votre compte : $loginUrl";

        Mail::raw($emailContent, function ($message) use ($user) {
            $message->to($user->email)->subject('Lien de connexion');
        });
    }

    public function login(Request $request, $token)
    {
        $user = User::where('verification_token', $token)->first();

        if (!$user) {
            return response()->json([
                'message' => 'Jeton de connexion invalide'
            ], 401);
        }

        $user->email_verified_at = now();
        $user->login_token = Str::random(60);
        $user->save();

        $response = [
            'message' => 'Connecté avec succès.',
            'user' => $user
        ];

        return response()->json($response, 200);
    }
}
