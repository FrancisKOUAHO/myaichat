<?php

namespace App\Models;

use App\Mail\MagicLinkEmail;
use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'email',
        'magic_link_token',
        'magic_link_token_expires_at',
        'sub_id',
        'last_reset_date'
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

    // Mutateur pour obtenir la valeur de last_reset_date
    public function getLastResetDateAttribute($value)
    {
        return Carbon::parse($value); // Convertit la chaîne en objet Carbon
    }

    // Mutateur pour définir la valeur de last_reset_date
    public function setLastResetDateAttribute($value)
    {
        $this->attributes['last_reset_date'] = Carbon::parse($value)->toDateTimeString();
    }
}

