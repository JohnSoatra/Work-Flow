<?php

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

function defaultName() {
    return "0..";
}
function diskName() {
    return "s3";
    // return "local";
}
function s3List($folderName, $filter) {
    $disk = Storage::disk(diskName());
    
    $dirs = $disk->directories($folderName);
    $files = $disk->files($folderName);
    foreach ($files as $index => $file) {
        if (fileName($file) == defaultName()) {
            unset($files[$index]);
            break;
        }
    }
    $dirs = putType(false, $dirs);
    $files = putType(true, $files);
    return [...$dirs, ...$files];
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
function s3Rename($path, $newName) {
    $disk = Storage::disk(diskName());
    $newPath = createNewPath($path, $newName);
    $disk->move($path, $newPath);
    return $newName;
}
function s3Move($path, $newPath) {
    $disk = Storage::disk(diskName());
    $disk->move($path, $newPath);
    return $newPath;
}
function s3Copy($path, $newPath) {
    $disk = Storage::disk(diskName());
    $disk->copy($path, $newPath);
    return $newPath;
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
function s3CreateFolder($path) {
    $disk = Storage::disk(diskName());
    $file = tempnam(sys_get_temp_dir(), "ok");
    $disk->putFileAs(
        $path,
        $file,
        defaultName()
    );
    return fileName($path);
}
function s3DeleteFolder($path) {
    $disk = Storage::disk(diskName());
    $disk->deleteDirectory("$path");
    return fileName($path);
}
function s3CopyFolder($path, $newPath) {
    $disk = Storage::disk(diskName());
    $dirs = $disk->allDirectories($path);
    $files = $disk->allFiles($path);

    if (!$disk->exists($newPath)) {
        s3CreateFolder($newPath);
    }
    foreach($dirs as $dir) {
        $newName = str_replace_first($path, $newPath, $dir);
        s3CreateFolder($newName);
    }
    foreach($files as $file) {
        if (fileName($file) != defaultName()) {
            $newName = str_replace_first($path, $newPath, $file);
            $disk->copy($file, $newName);
        }
    }
    return $newPath;
}
function s3DownloadFolder($path) {
    $disk = Storage::disk(diskName());
    $separator = separator($path);
    $id = getID($path);
    $name = fileName($path);
    $temp_file = tempnam(sys_get_temp_dir(), "$id-");
    $zip = new ZipArchive();
    $zip->open($temp_file, ZipArchive::CREATE | ZipArchive::OVERWRITE);

    $dirs = $disk->allDirectories($path);
    $files = $disk->allFiles($path);
    $added = false;

    foreach($dirs as $dir) {
        $zip->addEmptyDir(
            str_replace_first($path.$separator, "", $dir)
        );
        if (!$added) $added = true;
    }
    foreach($files as $file) {
        if (fileName($file) != defaultName()) {
            $zip->addFromString(
                str_replace_first($path.$separator, "", $file),
                $disk->get($file),
            );
            if (!$added) $added = true;
        }
    }
    $zip->close();
    $content = $added ? File::get($temp_file) : File::get(public_path("emp.zip"));

    return Response::make($content)
        ->header("Content-Disposition", "attachment; filename = $name.zip")
        ->header("Content-Type", "application/zip");
}
function s3Delete($path) {
    $disk = Storage::disk(diskName());
    $disk->delete($path);
    return fileName($path);
}
function getID($path) {
    $separator = separator($path);
    return explode($separator, $path)[1];
}
function separator($path) {
    if (str_contains($path, "/")) {
        return "/";
    } else if (str_contains("\\", $path)) {
        return "\\";
    } else {
        return "";
    }
}
function fileName($path) {
    if (str_contains($path, "/")) {
        $arr = explode("/", $path);
        $name = $arr[count($arr) - 1];
    } else if (str_contains("\\", $path)) {
        $arr = explode($path, "\\");
        $name = $arr[count($arr) - 1];
    } else {
        $name = $path;
    }
    return $name;
}
function removeMainFolder($folderName, $dirs) {
    foreach ($dirs as $index => $dir) {
        if ($dir == $folderName) {
            unset($dirs[$index]);
            break;
        }
    }
    return $dirs;
}
function putType(bool $isFile, $array) {
    return array_map(function($path) use ($isFile) {
        return [
            "isFile" => $isFile,
            "name" => fileName($path)
        ];
    }, $array);
}
function createNewPath($path, $newName) {
    if (str_contains($path, "\\")) {
        $sp = "\\";
    } else if (str_contains($path, "/")) {
        $sp = "/";
    } else {
        $sp = "";
    }
    $slices = $sp ? explode($sp, $path) : [$path];
    $slices[count($slices) - 1] = $newName;
    return join($sp, $slices);
}
function str_replace_first($search, $replace, $subject) {
    $search = "/".preg_quote($search, "/")."/";
    return preg_replace($search, $replace, $subject, 1);
}
?>
