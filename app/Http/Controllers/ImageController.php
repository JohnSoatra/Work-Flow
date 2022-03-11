<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;

class ImageController extends Controller
{
    public function get($name) {
        $file = File::get("images/$name");
        if ($file) {
            $type = File::mimeType("images/$name");
            $res = Response::make($file, 200)
                ->header("Content-Type", $type);
            return $res;
        }
        return Response::json([
            "msg" => "Image not found"
        ], 400);
    }
}
