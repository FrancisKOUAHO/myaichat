<?php

namespace App\Imports;

use App\Models\ShopifyProduct;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\ToModel;

class ProductsImport implements ToModel
{
    /**
     * @var int $userId
     */
    private int $userId;

    /**
     * Constructor to receive the user ID.
     *
     * @param int $userId
     */
    public function __construct(int $userId)
    {
        $this->userId = $userId;
    }

    /**
     * @param array $row
     *
     * @return ShopifyProduct
     */
    public function model(array $row): ShopifyProduct
    {
        return new ShopifyProduct([
            'user_id' => $this->userId,
            'title' => $row[2],
            'domain' => null,
            'full_url' => null,
            'vendor' => null,
            'product_type' => null,
            'name' => $row[1],
            'categories' => $row[3],
            'price_tax_excluded' => $row[4],
            'tax_rules_id' => $row[5],
            'wholesale_price' => $row[6],
            'on_sale' => $row[7],
            'discount_amount' => $row[8],
            'discount_percent' => $row[9],
            'discount_from' => $row[10],
            'discount_to' => $row[11],
            'reference' => $row[12],
            'supplier_reference' => $row[13],
            'supplier' => $row[14],
            'manufacturer' => $row[15],
            'ean13' => $row[16],
            'upc' => $row[17],
            'ecotax' => $row[18],
            'width' => $row[19],
            'height' => $row[20],
            'depth' => $row[21],
            'weight' => $row[22],
            'delivery_time_in_stock' => $row[23],
            'delivery_time_out_of_stock' => $row[24],
            'quantity' => $row[25],
            'minimal_quantity' => $row[26],
            'low_stock_alert' => $row[27],
            'visibility' => $row[28],
            'additional_shipping_cost' => $row[29],
            'unity' => $row[30],
            'unit_price' => $row[31],
            'summary' => $row[32],
            'description' => $row[33],
            'tags' => $row[34],
            'meta_title' => $row[35],
            'meta_keywords' => $row[36],
            'meta_description' => $row[37],
            'url_rewritten' => $row[38],
            'text_when_in_stock' => $row[39],
            'text_when_backorder_allowed' => $row[40],
            'available_for_order' => $row[41],
            'product_available_date' => $row[42],
            'product_creation_date' => $row[43],
            'show_price' => $row[44],
            'image_urls' => $row[45],
            'image_alt_texts' => $row[46],
            'delete_existing_images' => $row[47],
            'features' => $row[48],
            'available_online_only' => $row[49],
            'condition' => $row[50],
            'customizable' => $row[51],
            'uploadable_files' => $row[52],
            'text_fields' => $row[53],
            'out_of_stock_action' => $row[54],
            'virtual_product' => $row[55],
            'file_url' => $row[56],
            'number_of_allowed_downloads' => $row[57],
            'expiration_date' => $row[58],
            'number_of_days' => $row[59],
            'id_name_of_shop' => $row[60],
            'advanced_stock_management' => $row[61],
            'depends_on_stock' => $row[62],
            'warehouse' => $row[63],
            'accessories' => $row[64],
        ]);

    }
}
