<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ShopifyScraperController extends Controller
{
    public function scrapeShopify(Request $request): JsonResponse
    {
        $rootDomain = $request->input('url');
        $productListUrl = $rootDomain . "/products.json";
        $productList = [];

        $response = Http::get($productListUrl);
        $data = $response->json();
        $products = $data['products'];

        foreach ($products as $product) {
            $title = $product['title'];
            $slug = $product['handle'];
            $publishDate = $product['published_at'];
            $updatedDate = $product['updated_at'];
            $vendor = $product['vendor'];
            $productType = $product['product_type'];
            $tags = $product['tags'];
            $fullUrl = $rootDomain . "/products/" . $slug;

            $productDetails = [
                'title' => $title,
                'full_url' => $fullUrl,
                'publish_date' => $publishDate,
                'updated_date' => $updatedDate,
                'vendor' => $vendor,
                'product_type' => $productType,
                'tags' => $tags
            ];

            $productList[] = $productDetails;
        }

        return response()->json($productList);
    }
}
