<?php

namespace App\Http\Controllers;

use App\Models\ShopifyProduct;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ShopifyProductController extends Controller
{
    public function index(): JsonResponse
    {
        $products = ShopifyProduct::all();
        return response()->json($products);
    }

    public function show($id): JsonResponse
    {
        $product = ShopifyProduct::findOrFail($id);
        return response()->json($product);
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|integer',
            'title' => 'required',
            'full_url' => 'required',
            'publish_date' => 'required|date',
            'updated_date' => 'required|date',
            'vendor' => 'required',
            'product_type' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $product = ShopifyProduct::create($validator->validated());
        return response()->json($product, 201);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $product = ShopifyProduct::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'full_url' => 'required',
            'publish_date' => 'required|date',
            'updated_date' => 'required|date',
            'vendor' => 'required',
            'product_type' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $product->update($validator->validated());
        return response()->json($product);
    }

    public function destroy($id): JsonResponse
    {
        $product = ShopifyProduct::findOrFail($id);
        $product->delete();
        return response()->json('Le produit a été supprimé avec succès');
    }

    public function getUserProducts($user_id): JsonResponse
    {
        $products = ShopifyProduct::where('user_id', $user_id)->get();
        return response()->json($products);
    }
}