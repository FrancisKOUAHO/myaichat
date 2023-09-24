<?php

namespace App\Http\Controllers;

use App\Imports\ProductsImport;
use App\Models\ShopifyProduct;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\Importer;

class PrestaShopScrapingController extends Controller
{
    public function import(Request $request, $user_id): JsonResponse
    {
        try {
            $user = User::find($user_id);

            if (!$user) {
                return response()->json(['message' => 'Utilisateur non trouvé'], 404);
            }

            $import = new ProductsImport($user->id);

            $importedData = Excel::import($import, $request->file('csv_file'), null, \Maatwebsite\Excel\Excel::CSV);

            dump("importedData", $importedData);

            if (empty($importedData)) {
                return response()->json(['message' => 'Aucune donnée importée'], 400);
            }

            $importedProducts = [];

            for ($i = 0; $i < count($importedData[0]); $i++) {
                $rowData = $importedData[0][$i];

                if (is_array($rowData)) {
                    $rowData['user_id'] = $user->id;
                    $product = ShopifyProduct::create($rowData);
                    $importedProducts[] = $product;
                }
            }

            return response()->json([
                'message' => 'Importation réussie',
                'imported_products' => $importedProducts,
            ]);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Une erreur est survenue lors de l\'importation : ' . $e->getMessage()], 500);
        }
    }
}
