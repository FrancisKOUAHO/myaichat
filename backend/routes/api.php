<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ShopifyScraperController;
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

Route::group(['prefix' => 'auth'], function () {
    Route::post('/magic-link', [AuthController::class, 'requestLoginLink']);
    Route::post('/magic-link/{token}', [AuthController::class, 'loginWithToken']);
    Route::get('/redirect', [AuthController::class, 'redirect']);
    Route::get('/callback', [AuthController::class, 'callback']);
    Route::get('/users/{user}/posts', [PostController::class, 'getUserPosts']);
});

Route::prefix('shopify')->group(function () {
    Route::post('/scrape', [ShopifyScraperController::class, 'scrapeShopify']);
});

Route::group(['prefix' => 'posts'], function () {
    Route::get('{user}/posts', [PostController::class, 'getUserPosts']);
    Route::get('posts', [PostController::class, 'index']);
    Route::post('create', [PostController::class, 'store']);
    Route::get('{post}', [PostController::class, 'show']);
    Route::put('{post}', [PostController::class, 'update']);
    Route::delete('{post}', [PostController::class, 'destroy']);
});

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
