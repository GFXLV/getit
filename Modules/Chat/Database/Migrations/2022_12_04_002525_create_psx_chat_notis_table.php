j<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('psx_chat_notis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('item_id');
            $table->foreignId('buyer_user_id');
            $table->foreignId('seller_user_id');
            $table->string('type');
            $table->string('chat_noti_message');
            $table->string('chat_flag');
            $table->boolean('is_read');
            $table->timestamp('added_date');
            $table->foreignId('added_user_id');
            $table->timestamp('updated_date')->nullable();
            $table->foreignId('updated_user_id')->nullable();
            $table->smallInteger('updated_flag')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('psx_chat_notis');
    }
};
