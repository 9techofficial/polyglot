<?php

use Illuminate\Support\Facades\Route;

// Define the API route
Route::get('/', function () {
  return response()->json(['status' => 'success', 'message' => 'Welcome to PHP Services!'], 200);
});