<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;

@include_once "Helpers/s3.php";

class FolderController extends Controller
{
    public function list() {
        $id = Request::post("id");
        $folder = Request::post("folder");
        return s3List("files/$id/$folder", null);
    }
    public function create($path) {
        return s3CreateFolder("files/$path");
    }
    public function delete($path) {
        return s3DeleteFolder("files/$path");
    }
    public function rename() {
        $id = Request::post("id");
        $oldName = Request::post("oldName");
        $newName = Request::post("newName");
        return s3Rename($oldName, $newName, "files/$id");
    }
    public function copy($path) {
        $newPath = Request::post("newPath");
        return s3CopyFolder("files/$path", "files/$newPath");
    }
    public function download($path) {
        return s3DownloadFolder("files/$path");
    }
}
