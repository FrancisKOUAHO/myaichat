<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ShopifyScraperController;
use App\Http\Controllers\SubscriptionController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

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

});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('/check-trial-status', [AuthController::class, 'checkTrialStatus']);
});

Route::prefix('subscriptions')->group(function () {
    Route::post('/create', [SubscriptionController::class, 'create']);
    Route::get('/plans', [SubscriptionController::class, 'getPlans']);
    Route::get('/check', [SubscriptionController::class, 'checkSubscription']);
});


