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
            'title' => $row[1],
            'domain' => $row[2],
            'full_url' => $row[3],
            'publish_date' => Carbon::now()->toDateTimeString(),
            'updated_date' => Carbon::now()->toDateTimeString(),
            'vendor' => $row[6],
            'product_type' => $row[7],
        ]);
    }
}
