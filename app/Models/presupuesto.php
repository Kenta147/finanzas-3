<?php

namespace App\Models;
use App\Models\transaccione;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class presupuesto extends Model
{
    use HasFactory;
    protected $fillable = [
        'monto',
        'mes',
        'ano',
    ];
    public function transacciones()
    {
        return $this->hasMany(transaccione::class, 'presupuesto_id'); // Relación
    }
}
