<?php

use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

function diskName() {
    return "s3";
}

function s3Upload($file, $folder = "", $preName = "") {
    $disk = Storage::disk(diskName());
    $name = $preName.$file->getClientOriginalName();
    $disk->putFileAs(
        $folder,
        $file,
        $name
    );
    return $name;
}
function s3Response($path) {
    $disk = Storage::disk(diskName());
    try { return $disk->response($path); }
    catch(Exception) { return null; }
}
function s3Download($path) {
    $disk = Storage::disk(diskName());
    try {
        $type = $disk->mimeType($path);
        $name = fileName($path);
        return Response::make($disk->get($path))
            ->header("Content-Disposition", "attachment; filename = $name")
            ->header("Content-Type", $type);
    }
    catch(Exception) { return null; }
}
function s3Delete($name, $folder = "") {
    $disk = Storage::disk(diskName());
    $disk->delete("$folder/$name");
    return $name;
}
function s3Rename($oldName, $newName, $folder) {
    $disk = Storage::disk(diskName());
    $disk->move("$folder/$oldName", "$folder/$newName");
    return $newName;
}
function s3List($folderName) {
    $disk = Storage::disk(diskName());
    $files = $disk->allFiles($folderName);
    if ($folderName) {
        return validArray($folderName, $files);
    } else {
        return $files;
    }
}
function validArray($folderName, $array) {
    $result = [];
    $count = 1;
    foreach ($array as $file) {
        array_push(
            $result,
            str_replace(
                "$folderName/",
                "",
                $file,
                $count
            )
        );
    }
    return $result;
}
function fileName($path) {
    $array = explode("/", $path);
    return $array[count($array) - 1];
}
?>
