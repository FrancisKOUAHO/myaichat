<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ShopifyScraperController;
use App\Http\Controllers\SubscriptionController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application.
| These routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth'], function () {
    Route::post('/magic-link', [AuthController::class, 'requestLoginLink']);
    Route::get('/magic-link/{token}', [AuthController::class, 'loginWithToken']);
    Route::get('/redirect', [AuthController::class, 'redirect']);
    Route::get('/callback', [AuthController::class, 'callback']);
});

Route::middleware('auth:sanctum')->group(function () {});

Route::prefix('shopify')->group(function () {
    Route::post('/scrape', [ShopifyScraperController::class, 'scrapeShopify']);
});

Route::prefix('subscriptions')->group(function () {
    Route::post('/create', [SubscriptionController::class, 'create']);
    Route::get('/plans', [SubscriptionController::class, 'getPlans']);
    Route::get('/check', [SubscriptionController::class, 'checkSubscription']);
    Route::get('/check-trial-status', [AuthController::class, 'checkTrialStatus']);
});



