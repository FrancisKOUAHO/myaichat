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
        $user = User::find($user_id);

        if (!$user) {
            return response()->json(['message' => 'Utilisateur non trouvé'], 404);
        }

        // Utilisez le constructeur pour transmettre l'`user_id`
        $import = new ProductsImport($user->id);

        // Utilisez la méthode `get` pour obtenir les données importées sous forme de tableau
        $importedData = Excel::import($import, $request->file('csv_file'), null, \Maatwebsite\Excel\Excel::CSV)->toArray();

        if (empty($importedData)) {
            return response()->json(['message' => 'Aucune donnée importée'], 400);
        }

        $importedProducts = [];

        // Commencez à l'index 1 pour sauter la première ligne (en-têtes de colonnes)
        for ($i = 1; $i < count($importedData); $i++) {
            $rowData = $importedData[$i];
            // Assurez-vous que $rowData est un tableau
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
    }
}
