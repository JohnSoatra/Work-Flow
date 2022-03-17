<?php

namespace App\Http\Controllers;

@include "Helpers/s3.php";

use Illuminate\Support\Facades\Request;

class FileController extends Controller
{
    public function listFiles($id) {
        return s3List("files/$id");
    }
    public function uploadFile($id) {
        $files = Request::allFiles();
        $names = [];
        foreach ($files as $file) {
            $name = s3Upload($file, "files/$id");
            array_push($names, $name);
        }
        return $names;
    }
    public function deleteFile($id, $name) {
        return s3Delete($name, "files/$id");
    }
    public function renameFile($id, $oldName) {
        $newName = Request::post("newName");
        return s3Rename($oldName, $newName, "files/$id");
    }
    public function getFile($id, $name) {
        return s3Download("files/$id/$name");
    }
    public function getImage($name) {
        return s3Download("images/$name");
    }
}
