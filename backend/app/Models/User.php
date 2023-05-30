<?php

namespace App\Models;

use App\Mail\MagicLinkEmail;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'email',
        'magic_link_token',
        'auth_token',
        'subscription_active',
        'magic_link_token_expires_at',
    ];

    protected $hidden = [
        'magic_link_token_expires_at',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'magic_link_token_expires_at' => 'datetime',
    ];

    public function sendMagicLinkEmail()
    {
        // Envoi de l'email contenant le lien magique
        Mail::to($this->email)->send(new MagicLinkEmail($this));
    }

    public function generateMagicLinkToken()
    {
        $this->magic_link_token = Str::random(60);
        $this->magic_link_token_expires_at = now()->addMinutes(30);
        $this->save();
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
