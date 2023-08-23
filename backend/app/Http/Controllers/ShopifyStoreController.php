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
            'url' => 'required|string',
            'user_id' => 'required|integer',
        ]);

        $store = ShopifyStore::create($validatedData);

        return response()->json($store, 201);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $store = ShopifyStore::findOrFail($id);

        $validatedData = $request->validate([
            'content' => 'required|string'
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

    public function getUrlStores($url): JsonResponse
    {
        $stores = ShopifyStore::where('url', $url)->get();

        return response()->json($stores);
    }

    public function getUserStores($userID): JsonResponse
    {
        $stores = ShopifyStore::where('user_id', $userID)->get();

        return response()->json($stores);
    }
}
