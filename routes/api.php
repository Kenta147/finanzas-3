<?php
use App\Http\Controllers\TransaccioneController;
use Illuminate\Routing\Route;

Route::get('/transacciones', [TransaccioneController::class, 'index']);