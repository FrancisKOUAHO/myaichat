<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PlanController;
use App\Http\Controllers\Providerontroller;
use App\Http\Controllers\ShopifyProductController;
use App\Http\Controllers\ShopifyScraperController;
use App\Http\Controllers\PrestaShopScrapingController;
use App\Http\Controllers\ShopifyStoreController;
use App\Http\Controllers\SignalerBugController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
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

Route::group(['prefix' => 'v1', 'as' => 'v1.'], function () {

    Route::group(['prefix' => 'auth'], function () {
        Route::post('/request-login-link', [AuthController::class, 'requestLoginLink']);
        Route::post('/login/{token}', [AuthController::class, 'loginWithToken']);
        Route::get('/{provider}/redirect', [Providerontroller::class, 'redirect']);
        Route::get('/{provider}/callback', [Providerontroller::class, 'callback'])->name('callback');
    });

    Route::get('/{url}/stores', [ShopifyStoreController::class, 'getUrlStores']);
    Route::get('/product/{domain}', [ShopifyProductController::class, 'getUrlShopifyProduct']);

    Route::group(['prefix' => 'page'], function () {
        Route::get('/user-plan', [UserController::class, 'getPlanByShopifyUrl']);
    });

    Route::post('/messages', [MessageController::class, 'store']);
    Route::get('/messages/{url}/message-count', [MessageController::class, 'getMessageCount']);

    Route::post('/import/{user_id}', [PrestaShopScrapingController::class, 'import']);

    Route::post('rapport', [SignalerBugController::class, 'SendBugEmail']);

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/me', function (Request $request) {
            return $request->user();
        });

        Route::post('/logout', [AuthController::class, 'logout']);

        Route::group(['prefix' => 'stores'], function () {
            Route::post('shopify-store', [ShopifyStoreController::class, 'store']);
            Route::get('/stores', [ShopifyStoreController::class, 'index']);
            Route::get('/stores/{id}', [ShopifyStoreController::class, 'show']);
            Route::post('/stores', [ShopifyStoreController::class, 'store']);
            Route::put('/{id}', [ShopifyStoreController::class, 'update']);
            Route::delete('/stores/{id}', [ShopifyStoreController::class, 'destroy']);
            Route::get('/user/{userId}/stores', [ShopifyStoreController::class, 'getUserStores']);
            Route::get('/get-chatbot-number/{userId}', [ShopifyStoreController::class, 'getChatbotNumber']);
        });

        Route::group(['prefix' => 'products'], function () {
            Route::post('scrape', [ShopifyScraperController::class, 'scrapeShopify']);
            Route::get('/products', [ShopifyProductController::class, 'index']);
            Route::get('/products/{id}', [ShopifyProductController::class, 'show']);
            Route::post('/products', [ShopifyProductController::class, 'store']);
            Route::put('/products/{id}', [ShopifyProductController::class, 'update']);
            Route::delete('/products/{id}', [ShopifyProductController::class, 'destroy']);
            Route::get('/user/{user_id}/products', [ShopifyProductController::class, 'getUserProducts']);
            Route::get('{url}', [ShopifyScraperController::class, 'getProductUrl']);
        });

        Route::get('/plans', [PlanController::class, 'getPlans']);
        Route::post('/checkout/{id}', [PaymentController::class, 'checkout']);
        Route::post('/plan', [PlanController::class, 'createPlan']);

        Route::get('/check-payment', [PaymentController::class, 'getPaymentStatus']);
    });
});
