<?php

namespace App\Models;
use App\Models\Transaccione;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Presupuesto extends Model
{
    use HasFactory;
    protected $fillable = [
        'monto',
        'mes',
        'ano',
    ];
    public function transacciones()
    {
        return $this->hasMany(Transaccione::class, 'presupuesto_id'); // Relación
    }
}
