<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('shopify_products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')
                ->constrained()
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->text('title')->nullable();
            $table->text('domain')->nullable();
            $table->text('full_url')->nullable();
            $table->text('vendor')->nullable();
            $table->text('product_type')->nullable();
            $table->text('active')->nullable();
            $table->text('name')->nullable();
            $table->text('categories')->nullable();
            $table->text('price_tax_excluded')->nullable();
            $table->text('tax_rules_id')->nullable();
            $table->text('wholesale_price')->nullable();
            $table->text('on_sale')->nullable();
            $table->text('discount_amount')->nullable();
            $table->text('discount_percent')->nullable();
            $table->text('discount_from')->nullable();
            $table->text('discount_to')->nullable();
            $table->text('reference')->nullable();
            $table->text('supplier_reference')->nullable();
            $table->text('supplier')->nullable();
            $table->text('manufacturer')->nullable();
            $table->text('ean13')->nullable();
            $table->text('upc')->nullable();
            $table->text('ecotax')->nullable();
            $table->text('width')->nullable();
            $table->text('height')->nullable();
            $table->text('depth')->nullable();
            $table->text('weight')->nullable();
            $table->text('delivery_time_in_stock')->nullable();
            $table->text('delivery_time_out_of_stock')->nullable();
            $table->text('quantity')->nullable();
            $table->text('minimal_quantity')->nullable();
            $table->text('low_stock_alert')->nullable();
            $table->text('visibility')->nullable();
            $table->text('additional_shipping_cost')->nullable();
            $table->text('unity')->nullable();
            $table->text('unit_price')->nullable();
            $table->text('summary')->nullable();
            $table->text('description')->nullable();
            $table->text('tags')->nullable();
            $table->text('meta_title')->nullable();
            $table->text('meta_keywords')->nullable();
            $table->text('meta_description')->nullable();
            $table->text('url_rewritten')->nullable();
            $table->text('text_when_in_stock')->nullable();
            $table->text('text_when_backorder_allowed')->nullable();
            $table->text('available_for_order')->nullable();
            $table->text('product_available_date')->nullable();
            $table->text('product_creation_date')->nullable();
            $table->text('show_price')->nullable();
            $table->text('image_urls')->nullable();
            $table->text('image_alt_texts')->nullable();
            $table->text('delete_existing_images')->nullable();
            $table->text('features')->nullable();
            $table->text('available_online_only')->nullable();
            $table->text('condition')->nullable();
            $table->text('customizable')->nullable();
            $table->text('uploadable_files')->nullable();
            $table->text('text_fields')->nullable();
            $table->text('out_of_stock_action')->nullable();
            $table->text('virtual_product')->nullable();
            $table->text('file_url')->nullable();
            $table->text('number_of_allowed_downloads')->nullable();
            $table->text('expiration_date')->nullable();
            $table->text('number_of_days')->nullable();
            $table->text('id_name_of_shop')->nullable();
            $table->text('advanced_stock_management')->nullable();
            $table->text('depends_on_stock')->nullable();
            $table->text('warehouse')->nullable();
            $table->text('accessories')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shopify_products');
    }
};
