<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'status',
        'total_price',
        'session_id',
        'user_id',
        'payment_id',
    ];

    public function payment(): HasOne
    {
        return $this->hasOne(Payment::class);
    }
}
