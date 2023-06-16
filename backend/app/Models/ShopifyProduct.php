<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShopifyProduct extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'url',
        'full_url',
        'publish_date',
        'updated_date',
        'vendor',
        'product_type',
    ];

    protected $dates = [
        'publish_date',
        'updated_date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
