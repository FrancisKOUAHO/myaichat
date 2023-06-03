<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ShopifyProduct extends Model
{
    use HasFactory;

    /**
     * @var int|mixed|string|null
     */
    protected $fillable = [
        'user_id',
        'title',
        'full_url',
        'publish_date',
        'updated_date',
        'vendor',
        'product_type',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

