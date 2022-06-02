<?php

namespace App\Http\Controllers;

@include "Helpers/s3.php";

use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\Request;

class FileController extends Controller
{
    public function listFiles($path) {
        $filter = Request::query("filter");
        return s3List("files/$path", $filter);
    }
    public function uploadFile($path) {
        $files = Request::allFiles();
        $names = [];
        foreach ($files as $file) {
            $name = s3Upload($file, "files/$path");
            array_push($names, $name);
        }
        return $names;
    }
    public function deleteFile($path) {
        return s3Delete("files/$path");
    }
    public function renameFile($path) {
        $newName = Request::post("newName");
        return s3Rename("files/$path", $newName);
    }
    public function getFile($path) {
        return s3Response("files/$path");
    }
    public function downloadFile($path) {
        return s3Download("files/$path");
    }
    public function getImage($name) {
        return s3Response("images/$name");
    }
    public function moveFile($path) {
        $newPath = Request::post("newPath");
        return s3Move("files/$path", "files/$newPath");
    }
    public function copyFile($path) {
        $newPath = Request::post("newPath");
        return s3Copy("files/$path", "files/$newPath");
        // return s3CopyFolder("files/$path", "files/$newPath");
    }
}
