<?php

use App\Http\Controllers\TransaccioneController;
use Illuminate\Support\Facades\Route;

// Rutas para las transacciones
Route::prefix('transacciones')->group(function () {
    Route::get('/', [TransaccioneController::class, 'index']);
    Route::post('/', [TransaccioneController::class, 'store']);
    Route::get('/{id}', [TransaccioneController::class, 'show']);
    Route::put('/{id}', [TransaccioneController::class, 'update']);
    Route::delete('/{id}', [TransaccioneController::class, 'destroy']);

    // Ruta para obtener transacciones ordenadas por año
    Route::get('/ordenadas-por-ano', [TransaccioneController::class, 'getTransaccionesOrdenadasPorAno']);
});