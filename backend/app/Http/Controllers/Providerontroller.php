<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Laravel\Socialite\Facades\Socialite;

class Providerontroller extends Controller
{
    public function redirect($provider): string
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback($provider): RedirectResponse
    {
        try {
            $socialUser = Socialite::driver($provider)->stateless()->user();
            $user = User::firstOrCreate(['email' => $socialUser->email]);

            $this->resetMagicLinkToken($user);
            $magicLinkToken = $this->generateAccessToken($user);
            $this->saveMagicLinkTokenInDatabase($user, $magicLinkToken);

            return redirect()->away('http://localhost:3030/verify/?magic_link_token=' . $magicLinkToken);
        } catch (Exception $e) {
            return redirect()->away('http://localhost:3030');
        }
    }

    private function resetMagicLinkToken(User $user): void
    {
        $user->magic_link_token_expires_at = now()->addHour(1);
        $user->save();
    }

    private function generateAccessToken(User $user): string
    {
        return $user->createToken('magic_link_token', ['expires_in' => 60 * 24])->plainTextToken;
    }

    private function saveMagicLinkTokenInDatabase(User $user, string $accessToken): void
    {
        $user->magic_link_token = $accessToken;
        $user->save();
    }

}
