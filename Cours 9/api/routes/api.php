<?php

use Illuminate\Http\Request;

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

// Affichage (GET)
Route::get('/messages', 'Messages@showAll');
Route::get('/messages/{id}', 'Messages@show');

// Création (POST)
Route::post('/messages/new', 'Messages@create');

// Autre routes
Route::get('/users/active', 'Messages@activeUsers');
Route::get('/users/active/{minutes}', 'Messages@activeUsers');