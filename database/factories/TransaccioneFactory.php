<?php

namespace Database\Factories;
use App\Models\presupuesto;
use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\transaccione>
 */
class TransaccioneFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'tipo' => $this->faker->randomElement(['ingreso', 'gasto']), // Tipo de transacción
            'monto' => $this->faker->randomFloat(2, 50, 5000), // Monto entre 50 y 5000
            'descripcion' => $this->faker->sentence(), // Descripción aleatoria
            'fecha' => $this->faker->date(), // Fecha aleatoria
            'presupuesto_id' => presupuesto::factory(), // Relación con el presupuesto
        ];
    }
}
