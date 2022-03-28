<?php

namespace App\Http\Controllers;

@include_once "Helpers/s3.php";

use App\Models\User;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;

class UserController extends Controller
{
    public function getUser() {
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
    public function createUser() {
        $username = Request::post("username", "");
        $email = Request::post("email", "");
        $password = Request::post("password");
        $foundUsernames = User::where("username", $username)->first();
        $foundEmail = User::where("email", $email)->first();

        if ($foundUsernames) {
            return Response::json([
                "msg" => "Username is token.",
                "error" => "username"
            ], 400);
        } 
        if ($foundEmail) {
            return Response::json([
                "msg" => "Email was used.",
                "error" => "email"
            ], 400);
        }
        $user = new User($username, $email, $password);
        $user->save();
        return $user;
    }
    public function putUserInfo($id) {
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
        }
        return Response::json([
            "msg" => "could not find that user."
        ], 400);
    }
    public function uploadUserImage($id) {
        $user = User::find($id);
        if ($user) {
            $file = Request::file("profile");
            if ($file)  {
                if ($user->image != "default.svg") {
                    s3Delete($user->image);
                }
                return s3Upload($file, "images", "$id-");
            }
            return Response::json([
                "msg" => "No file sent."
            ], 400);
        }
        return Response::json([
            "msg" => "could not find that user."
        ], 400);
    }
    public function getUserId($username, $password) {
        $users = User::where("username", $username)
            ->where(DB::raw("BINARY `password`"), $password)
            ->first();
        if ($users) {
            return $users->id;
        }
        return 0;
    }
    public function deleteUser($id) {
        $user = User::find($id);
        if ($user) {
            $user->delete();
            return $user;
        }
        return Response::json([
            "msg" => "could not find that user."
        ], 400);
    }
    public function findUser($id) {
        $user = User::find($id);
        if ($user) {
            return $user;
        }
        return Response::json([
            "msg" => "could not find that user."
        ], 400);
    }
}
