<?php

namespace App\Http\Controllers;

use App\Models\Transaccione;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TransaccioneController extends Controller
{
    /**
     * Display a listing of all transacciones.
     */
    public function index()
    {
        return response()->json(Transaccione::all());
    }

    /**
     * Store a newly created transaccion in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'tipo' => 'required|in:ingreso,gasto',
            'monto' => 'required|numeric',
            'descripcion' => 'nullable|string',
            'fecha' => 'required|date',
            'presupuesto_id' => 'required|exists:presupuestos,id',
        ]);

        $transaccion = Transaccione::create($request->all());

        return response()->json($transaccion, 201);
    }

    /**
     * Display the specified transaccion.
     */
    public function show($id)
    {
        $transaccion = Transaccione::findOrFail($id);
        return response()->json($transaccion);
    }

    /**
     * Update the specified transaccion in storage.
     */
    public function update(Request $request, $id)
    {
        $transaccion = Transaccione::findOrFail($id);
        $transaccion->update($request->all());
        return response()->json($transaccion);
    }

    /**
     * Remove the specified transaccion from storage.
     */
    public function destroy($id)
    {
        $transaccion = Transaccione::findOrFail($id);
        $transaccion->delete();
        return response()->json(null, 204);
    }

    /**
     * Obtener transacciones ordenadas por año.
     */
    public function getTransaccionesOrdenadasPorAno()
    {
        $transacciones = Transaccione::select(DB::raw('YEAR(fecha) as year, COUNT(*) as total'))
            ->groupBy('year')
            ->orderBy('year', 'desc')
            ->get();

        return response()->json($transacciones);
    }
}