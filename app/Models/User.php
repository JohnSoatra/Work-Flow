<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;
    public function __construct(
        $username = null,
        $email = null,
        $password = null,
        $gender = null,
        $contact_info = null,
        $image = null
    ) {
        $this->username = $username ? $username : "name";
        $this->email = $email ? $email : "name@email.com";
        $this->password = $password ? $password : "password";
        $this->gender = $gender ? $gender : "male";
        $this->contact_info = $contact_info ? $contact_info : "no contact information";
        $this->image = $image ? $image : "images/default.svg";
    }
}
