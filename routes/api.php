<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RealisationsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Routes publiques
Route::resource('/realisations', RealisationsController::class, ['except' => ['show', 'create', 'edit']]);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/send-contact-mail', [ContactController::class, 'send']);

// Routes protégées
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/add', [RealisationsController::class, 'add']);
    Route::post('/edit', [RealisationsController::class, 'edit']);
    Route::post('/delete', [RealisationsController::class, 'delete']);
});
