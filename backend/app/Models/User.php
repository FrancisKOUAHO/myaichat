<?php

namespace App\Models;

use App\Mail\MagicLinkEmail;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    public mixed $magic_link_token;
    public mixed $email;

    protected $fillable = [
        'email',
        'magic_link_token',
        'auth_token',
        'magic_link_token_expires_at',
        'sub_id'
    ];

    protected $hidden = [
        'magic_link_token_expires_at',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'magic_link_token_expires_at' => 'datetime',
    ];


    public function plan()
    {
        return $this->hasOne(Plan::class, 'id', 'plan_id');
    }
}
