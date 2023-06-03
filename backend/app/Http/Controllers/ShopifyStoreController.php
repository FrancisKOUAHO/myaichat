<?php

namespace App\Http\Controllers;

use App\Models\ShopifyStore;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ShopifyStoreController extends Controller
{
    public function index(): JsonResponse
    {
        $stores = ShopifyStore::all();

        return response()->json($stores);
    }

    public function show($id): JsonResponse
    {
        $store = ShopifyStore::findOrFail($id);

        return response()->json($store);
    }

    public function store(Request $request): JsonResponse
    {
        $validatedData = $request->validate([
            'url' => 'required|url',
            'user_id' => 'required|integer'
        ]);

        $store = ShopifyStore::create($validatedData);

        return response()->json($store, 201);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $store = ShopifyStore::findOrFail($id);

        $validatedData = $request->validate([
            'url' => 'required|url',
            'user_id' => 'required|integer'
        ]);

        $store->update($validatedData);

        return response()->json($store);
    }

    public function destroy($id): JsonResponse
    {
        $store = ShopifyStore::findOrFail($id);

        $store->delete();

        return response()->json('Le magasin a été supprimé avec succès');
    }

    public function getUserStores($user_id): JsonResponse
    {
        $stores = ShopifyStore::where('user_id', $user_id)->get();

        return response()->json($stores);
    }
}