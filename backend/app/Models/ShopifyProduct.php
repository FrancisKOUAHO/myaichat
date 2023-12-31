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
        'domain',
        'full_url',
        'publish_date',
        'updated_date',
        'vendor',
        'name',
        'product_type',
        'categories',
        'price_tax_excluded',
        'tax_rules_id',
        'wholesale_price',
        'on_sale',
        'discount_amount',
        'discount_percent',
        'discount_from',
        'discount_to',
        'reference',
        'supplier_reference',
        'supplier',
        'manufacturer',
        'ean13',
        'upc',
        'ecotax',
        'width',
        'height',
        'depth',
        'weight',
        'delivery_time_in_stock',
        'delivery_time_out_of_stock',
        'quantity',
        'minimal_quantity',
        'low_stock_alert',
        'visibility',
        'additional_shipping_cost',
        'unity',
        'unit_price',
        'summary',
        'description',
        'tags',
        'meta_title',
        'meta_keywords',
        'meta_description',
        'url_rewritten',
        'text_when_in_stock',
        'text_when_backorder_allowed',
        'available_for_order',
        'product_available_date',
        'product_creation_date',
        'show_price',
        'image_urls',
        'image_alt_texts',
        'delete_existing_images',
        'features',
        'available_online_only',
        'condition',
        'customizable',
        'uploadable_files',
        'text_fields',
        'out_of_stock_action',
        'virtual_product',
        'file_url',
        'number_of_allowed_downloads',
        'expiration_date',
        'number_of_days',
        'id_name_of_shop',
        'advanced_stock_management',
        'depends_on_stock',
        'warehouse',
        'accessories',
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
