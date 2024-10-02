<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\presupuesto;
use App\Models\transaccione;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        presupuesto::factory()
        ->count(50)
        ->has(transaccione::factory()->count(5)) // Cada presupuesto tiene 3 transacciones
        ->create();
    }
}
