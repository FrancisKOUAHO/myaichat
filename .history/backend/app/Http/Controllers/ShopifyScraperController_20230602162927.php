<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\ShopifyProduct;

class ShopifyScraperController extends Controller
{
    public function scrapeShopify(Request $request): JsonResponse
    {
        $requestData = $request->input();

        if (!isset($requestData['url']) || !isset($requestData['user_id'])) {
            return response()->json('Les données de la requête sont invalides.', 400);
        }

        $url = $requestData['url'];
        $userId = $requestData['user_id'];

        $productListUrl = $url . "/products.json";
        $productList = [];

        $response = Http::get($productListUrl);
        $data = $response->json();

        if (!isset($data['products'])) {
            return response()->json('Aucun produit trouvé.', 404);
        }

        $products = $data['products'];

        foreach ($products as $product) {
            if (isset($product['title']) && isset($product['handle']) && isset($product['published_at']) && isset($product['updated_at']) && isset($product['vendor']) && isset($product['product_type']) && isset($product['tags'])) {
                $title = $product['title'];
                $slug = $product['handle'];
                $publishDate = $product['published_at'];
                $updatedDate = $product['updated_at'];
                $vendor = $product['vendor'];
                $productType = $product['product_type'];
                $fullUrl = $url . "/products/" . $slug;

                $newProduct = new ShopifyProduct();
                $newProduct->user_id = $userId;
                $newProduct->title = $title;
                $newProduct->full_url = $fullUrl;
                $newProduct->publish_date = $publishDate;
                $newProduct->updated_date = $updatedDate;
                $newProduct->vendor = $vendor;
                $newProduct->product_type = $productType;

                if ($newProduct->save()) {
                    $productList[] = $newProduct;
                } else {
                    $errorMessage = "Une erreur est survenue lors de la sauvegarde du produit.";
                    return response()->json($errorMessage, 500);
                }
            }
        }

        return response()->json($productList);
    }
}
