<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

$hc = HomeController::class;
$uc = UserController::class;

Route::get("/", [$hc, "index"]);

Route::get("/users", [$uc, "get"]);
Route::get("/users/{id}", [$uc, "find"]);
Route::delete("users/{id}", [$uc, "delete"]);
Route::post("/users", [$uc, "create"]);
Route::put("/users/{id}", [$uc, "put"]);
Route::post("/users/{id}", [$uc, "upload"]);