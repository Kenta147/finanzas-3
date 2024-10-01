<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\presupuesto>
 */
class PresupuestoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'monto' => $this->faker->randomFloat(2, 1000, 10000), // Monto entre 1000 y 10000
            'mes' => $this->faker->numberBetween(1, 12), // Mes entre 1 y 12
            'ano' => $this->faker->year(), // Año actual
        ];
    }
}
