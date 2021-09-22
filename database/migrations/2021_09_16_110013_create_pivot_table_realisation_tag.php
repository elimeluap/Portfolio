<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePivotTableRealisationTag extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('realisation_tag', function (Blueprint $table) {
            //$table->id();
            $table->bigInteger('realisation_id')->unsigned();
            $table->bigInteger('tag_id')->unsigned();
            //$table->timestamps();
            $table->foreign('realisation_id')->references('id')->on('realisations')->onDelete('cascade');
            $table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('realisation_tag');
    }
}
