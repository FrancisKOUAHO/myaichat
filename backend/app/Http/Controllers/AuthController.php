<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class AuthController extends Controller
{

    public function requestLoginLink(Request $request): JsonResponse
    {
        $fields = $request->validate([
            'email' => 'required|string|email',
        ]);

        $user = User::firstOrNew(['email' => $fields['email']]);

        $user->magic_link_token = Str::random(60);
        $user->magic_link_token_expires_at = Carbon::now()->addHour(1);
        $user->save();

        $this->sendLoginEmail($user);

        return response()->json(['message' => 'Veuillez consulter votre boîte de réception pour vous connecter.'], 200);
    }

    protected function sendLoginEmail(User $user): void
    {
        $magicLinkToken = 'https://app.myaichat.io/verify' . '/?magic_link_token=' . $user->magic_link_token;
        $messageBody = "Cliquez sur le lien ci-dessous pour vous connecter :\n\n" . $magicLinkToken;

        Mail::raw($messageBody, function ($message) use ($user) {
            $message->to($user->email)->subject('Lien de connexion');
        });
    }

    public function loginWithToken($token): JsonResponse
    {
        try {
            $user = User::where('magic_link_token', $token)
                ->whereNotNull('magic_link_token_expires_at')
                ->where('magic_link_token_expires_at', '>=', now())
                ->firstOrFail();

            if ($user->magic_link_token_expires_at < now()) {
                return response()->json(['message' => 'Jeton de connexion expiré.'], 401);
            }

            $user->magic_link_token_expires_at = now()->addHour(1);
            $user->save();

            $accessToken = $user->createToken('access_token', ['expires_in' => 60 * 24])->plainTextToken;

            return response()->json(['message' => 'Connecté avec succès.', 'user' => $user, 'access_token' => $accessToken], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(['message' => 'Jeton de connexion invalide ou expiré.'], 401);
        }
    }

    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Déconnecté avec succès.'], 200);
    }
}
