<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'total',
        'order_id',
        'st_cus_id',
        'st_sub_id',
        'st_plan_id',
        'st_payment_intent_id',
        'st_payment_method',
        'st_payment_status',
        'date',
        'trial_end',
    ];

    protected $dates = [
        'trial_end',
    ];

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }
}
