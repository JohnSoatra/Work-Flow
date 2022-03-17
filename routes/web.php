<?php

use App\Http\Controllers\FileController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

$userController = UserController::class;
$fileController = FileController::class;

Route::get("/files/{id}/{name}", [$fileController, "getFile"]);
Route::get("/files/download/{id}/{name}", [$fileController, "downloadFile"]);

Route::get("/images/{name}", [$fileController, "getImage"]);

Route::get("/users", [$userController, "getUser"]);
Route::post("/users", [$userController, "createUser"]);

Route::get("/users/{id}", [$userController, "findUser"]);
Route::delete("users/{id}", [$userController, "deleteUser"]);
Route::put("/users/{id}", [$userController, "putUserInfo"]);
Route::post("/users/{id}", [$userController, "uploadUserImage"]);

Route::get("/users/{id}/files", [$fileController, "listFiles"]);
Route::post("/users/{id}/files", [$fileController, "uploadFile"]);
Route::get("/users/{username}/{password}", [$userController, "getUserId"]);

Route::delete("/users/{id}/files/{name}", [$fileController, "deleteFile"]);
Route::put("/users/{id}/files/{oldName}", [$fileController, "renameFile"]);
