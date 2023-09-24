<?php

namespace App\Http\Controllers;

use App\Imports\ProductsImport;
use App\Models\ShopifyProduct;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\Importer;
use Maatwebsite\Excel\Readers\ReadChunkFilter;


class PrestaShopScrapingController extends Controller
{
    public function import(Request $request, $user_id)
    {
        try {
            $user = User::find($user_id);

            if (!$user) {
                return response()->json(['message' => 'Utilisateur non trouvé'], 404);
            }

            $import = new ProductsImport($user->id);

            $file = $request->file('csv_file');

            Excel::filter('chunk')->load($file)->chunk(500, function ($results) use ($import) {
                foreach ($results->toArray() as $row) {
                    try {
                        $importedProduct = $import->model($row);
                        Log::info('Produit importé avec succès: ' . json_encode($importedProduct->toArray()));
                    } catch (\Exception $e) {
                        Log::error('Erreur lors de l\'importation d\'un produit: ' . $e->getMessage());
                    }
                }
            }, ReadChunkFilter::CHUNK_ROW_COUNT);

            Log::info('Importation réussie pour l\'utilisateur: ' . $user->id);

            return response()->json(['message' => 'Importation réussie']);
        } catch (\Exception $e) {
            Log::error('Une erreur est survenue lors de l\'importation : ' . $e->getMessage());
            return response()->json(['message' => 'Une erreur est survenue lors de l\'importation : ' . $e->getMessage()], 500);
        }
    }
}

