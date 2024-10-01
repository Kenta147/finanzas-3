<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class transaccione extends Model
{
    use HasFactory;
    protected $fillable = [
        'tipo',
        'monto',
        'descripcion',
        'fecha',
        'presupuesto_id', 
    ];

  
    public function presupuesto()
    {
        return $this->belongsTo(presupuesto::class);
    }
}
