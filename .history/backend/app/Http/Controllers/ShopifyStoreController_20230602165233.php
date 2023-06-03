<?php

namespace App\Http\Controllers;

use App\Models\ShopifyStore;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ShopifyStoreController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validatedData = $request->validate([
            'url' => 'required|url',
            'user_id' => 'required|integer'
        ]);

        $store = ShopifyStore::create($validatedData);

        return response()->json($store, 201);
    }
}

