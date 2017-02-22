<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', function () {
    return view('chat');
})->middleware('auth');

Route::post('send', function () {
    broadcast(new \App\Events\MessageSent($user, $message))->toOthers();
});
