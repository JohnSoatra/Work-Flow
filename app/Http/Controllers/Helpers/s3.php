<?php

use Illuminate\Support\Facades\Storage;

function s3Upload($file, $folder = "", $preName = "") {
    $disk = Storage::disk("s3");
    $name = $preName.$file->getClientOriginalName();
    $disk->putFileAs(
        $folder,
        $file,
        $name
    );
    return $name;
}
function s3Download($path) {
    $disk = Storage::disk("s3");
    try { return $disk->response($path); }
    catch(Exception) { return null; }
}
function s3Delete($name, $folder = "") {
    $disk = Storage::disk("s3");
    $disk->delete("$folder/$name");
    return $name;
}
function s3Rename($oldName, $newName, $folder) {
    $disk = Storage::disk("s3");
    $disk->move("$folder/$oldName", "$folder/$newName");
    return $newName;
}
function s3List($folderName) {
    $disk = Storage::disk("s3");
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
?>
