<?php

use App\Http\Controllers\FileController;
use App\Http\Controllers\FolderController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

$userController = UserController::class;
$fileController = FileController::class;
$folderController = FolderController::class;

Route::get("/files/download/{path}", [$fileController, "downloadFile"])->where("path", ".*");
Route::get("/files/{path}", [$fileController, "getFile"])->where("path", ".*");

Route::post("/folder/create/{path}", [$folderController, "create"])->where("path", ".*");
Route::delete("/folder/delete/{path}", [$folderController, "delete"])->where("path", ".*");
Route::put("/folder/copy/{path}", [$folderController, "copy"])->where("path", ".*");
Route::get("/folder/download/{path}", [$folderController, "download"])->where("path", ".*");

Route::get("/images/{name}", [$fileController, "getImage"]);

Route::get("/users", [$userController, "getUser"]);
Route::post("/users", [$userController, "createUser"]);

Route::get("/users/{id}", [$userController, "findUser"]);
Route::delete("users/{id}", [$userController, "deleteUser"]);
Route::put("/users/{id}", [$userController, "putUserInfo"]);
Route::post("/users/{id}", [$userController, "uploadUserImage"]);

Route::put("/users/files/move/{path}", [$fileController, "moveFile"])->where("path", ".*");
Route::put("/users/files/copy/{path}", [$fileController, "copyFile"])->where("path", ".*");
Route::get("/users/files/{path}", [$fileController, "listFiles"])->where("path", ".*");
Route::post("/users/files/{path}", [$fileController, "uploadFile"])->where("path", ".*");
Route::delete("/users/files/{path}", [$fileController, "deleteFile"])->where("path", ".*");
Route::put("/users/files/{path}", [$fileController, "renameFile"])->where("path", ".*");

Route::get("/users/{username}/{password}", [$userController, "getUserId"]);
