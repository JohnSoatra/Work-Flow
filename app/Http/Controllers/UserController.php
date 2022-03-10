<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;

class UserController extends Controller
{
    public function get() {
        $query = Request::query();
        if (sizeof($query) > 0) {
            $users = User::where("username", $query["username"])
                ->where(DB::raw("BINARY `password`"), $query["password"])
                ->first();
            if ($users) {
                return $users;
            }
            return Response::json([
                "msg" => "Not found this user.",
                "error" => "not specific"
            ], 400);
        }
        return User::all();
    }
    public function create() {
        $username = Request::post("username", "");
        $email = Request::post("email", "");
        $password = Request::post("password");
        $foundUsernames = User::where("username", $username)
            ->limit(1)
            ->get();
        $foundEmail = User::where("email", $email)
            ->limit(1)
            ->get();

        if (sizeof($foundUsernames) > 0) {
            return Response::json([
                "msg" => "Username is token.",
                "error" => "username"
            ], 400);
        } 
        if (sizeof($foundEmail) > 0) {
            return Response::json([
                "msg" => "Email was used.",
                "error" => "email"
            ], 400);
        }
        $user = new User($username, $email, $password);
        $user->save();
        return $user;
    }
    public function put($id) {
        $user = User::find($id);
        if ($user) {
            $username = Request::post("username");
            $email = Request::post("email");
            $password = Request::post("password");
            $gender = Request::post("gender");
            $contact_info = Request::post("contact_info");
            $image = Request::post("image");
            if ($username) $user->username = $username;
            if ($email) $user->email = $email;
            if ($password) $user->password = $password;
            if ($gender) $user->gender = $gender;
            if ($contact_info) $user->contact_info = $contact_info;
            if ($image) $user->image = $image;
            $user->save();
            return $user;
        } else {
            return Response::json([
                "msg" => "could not find that user."
            ], 400);
        }
    }
    public function upload($id) {
        $user = User::find($id);
        if ($user) {
            $file = Request::file("profile");
            if ($file)  {
                $slices = explode("/", $user->image);
                $prevImage = $slices[sizeof($slices) - 2]."/".$slices[sizeof($slices) - 1];
                $path = $file->path();
                $name = $file->getClientOriginalName();
                if (!str_contains($prevImage, "images/default.svg")) {
                    try {unlink($prevImage);} catch(Exception){}
                }
                rename($path, "images/$id-$name");
                return asset("images/$id-$name");
            }
            return Response::json([
                "msg" => "No file sent."
            ], 400);
        }
        return Response::json([
            "msg" => "could not find that user."
        ], 400);
    }
    public function delete($id) {
        $user = User::find($id);
        if ($user) {
            $user->delete();
            return $user;
        } else {
            return Response::json([
                "msg" => "could not find that user."
            ], 400);
        }
    }
    public function find($id) {
        $user = User::find($id);
        if ($user) {
            return $user;
        } else {
            return Response::json([
                "msg" => "could not find that user."
            ], 400);
        }
    }
}
