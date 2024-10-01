<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\presupuesto; // Asegúrate de importar el modelo
use App\Models\transaccione; 
class PresupuestoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        presupuesto::factory()->count(10)->create();
    }
}
