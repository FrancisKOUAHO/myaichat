<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use App\Models\User;
use Laravel\Socialite\Facades\Socialite;


class AuthController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(User::all());
    }

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

        $this->sendVerificationEmail($user);

        return response()->json(['message' => 'Registration successful. Please check your email for verification.'], 201);
    }

    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string',
        ]);

        $user = User::where('email', $fields['email'])->first();

        if (!$user || !$user->verification_token) {
            return response()->json([
                'message' => 'User not found or email not verified'
            ], 401);
        }

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response()->json($response, 201);
    }

    protected function sendVerificationEmail(User $user)
    {
        $verificationUrl = route('verify', ['token' => $user->verification_token]);

        Mail::raw("Please click the following link to verify your email and access the dashboard: $verificationUrl", function ($message) use ($user) {
            $message->to($user->email)->subject('Verify your email');
        });
    }

    public function verify(Request $request, $token)
    {
        $user = User::where('verification_token', $token)->first();

        if (!$user) {
            return response()->json([
                'message' => 'Invalid verification token'
            ], 400);
        }

        $user->verification_token = null;
        $user->save();

        return response()->json(['message' => 'Email verified. You can now log in.'], 200);
    }

    public function redirectToProvider()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleProviderCallback()
    {
        try {
            $googleUser = Socialite::driver('google')->user();
        } catch (\Exception $e) {
            return response()->json(['message' => 'Google login failed'], 401);
        }

        // Check if user already exists in our database
        $existingUser = User::where('email', $googleUser->getEmail())->first();

        if ($existingUser) {
            // If user already exists, simply return that user.
            $user = $existingUser;
        } else {
            // If user does not exist, create a new user record
            $newUser = new User;
            $newUser->email = $googleUser->getEmail();
            $newUser->google_id = $googleUser->getId();
            $newUser->email_verified_at = now();
            $newUser->save();

            $user = $newUser;
        }

        // Generate a personal access token for the user.
        // This token will be used for subsequent API requests.
        $token = $user->createToken('API Token')->plainTextToken;

        // Return a JSON response with the user details and the token.
        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }

}
