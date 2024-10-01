<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Models\presupuesto;
use App\Http\Controllers\PresupuestoController;
use App\Http\Controllers\transaccioneController;

use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'presupuesto' => Presupuesto::paginate(50)->onEachSide(1),
    ]);
});


Route::post('/presupuesto/store', [PresupuestoController::class, 'store'])->name('presupuesto.store');

Route::get('/presupuesto/{id}', [PresupuestoController::class, 'show'])->name('presupuesto.show');

Route::get('/presupuesto/{id}/transacciones', [transaccioneController::class, 'show']);

Route::post('/transacciones/store', [transaccioneController::class, 'store'])->name('transacciones.store');

//Route::resource('presupuesto',PresupuestoController::class);

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__.'/auth.php';
