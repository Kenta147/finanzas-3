<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transacciones', function (Blueprint $table) {
            $table->id();
            $table->enum('tipo', ['ingreso','gasto']);
            $table->decimal('monto',10,2);
            $table->text('descripcion')->nullable();
            $table->date('fecha');
            $table->unsignedBigInteger('presupuesto_id');
            $table->foreign('presupuesto_id')->references('id')->on('presupuestos')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transacciones');
    }
};
