<?php

use Illuminate\Support\Facades\Route;

// Define the API route
Route::get('/api', function () {
    return view('welcome to php services!');
});

Route::get('/', function () {
    return view('welcome');
});
