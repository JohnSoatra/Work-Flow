<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("username", 255);
            $table->string("email", 255);
            $table->string("password", 255);
            $table->string("gender", 255);
            $table->string("contact_info", 255);
            $table->string("image", 255);
        });
    }
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
