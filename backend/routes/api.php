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
    Route::post('/magic-link/{token}', [AuthController::class, 'loginWithToken']);
    Route::get('/redirect', [AuthController::class, 'redirect']);
    Route::get('/callback', [AuthController::class, 'callback']);
});

Route::prefix('shopify')->group(function () {
    Route::post('/scrape', [ShopifyScraperController::class, 'scrapeShopify']);

});

Route::prefix('subscription')->group(function () {
    Route::post('/check_subscription', [SubscriptionController::class, 'checkSubscription']);
});

Route::get('/sendUserIdToChatbot', [AuthController::class, 'sendUserIdToChatbot']);
