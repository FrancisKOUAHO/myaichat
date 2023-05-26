<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ShopifyScraperController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/**
 * @OA\Info(
 *     title="Titre de votre API",
 *     version="1.0.0",
 *     description="Description de votre API"
 * )
 */

Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::get('/login/{token}', [AuthController::class, 'login'])->name('login');
    Route::get('/redirect', [AuthController::class, 'redirect']);
    Route::get('/callback', [AuthController::class, 'callback']);
});

Route::prefix('shopify')->group(function () {
    Route::post('/scrape', [ShopifyScraperController::class, 'scrapeShopify']);

});;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

