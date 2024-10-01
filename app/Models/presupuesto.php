<?php

namespace App\Models;

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
}
