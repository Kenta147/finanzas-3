<?php

namespace App\Http\Controllers;

use App\Models\transaccione;
use App\Http\Requests\StoretransaccioneRequest;
use App\Http\Requests\UpdatetransaccioneRequest;
use Illuminate\Http\Request;
class transaccioneController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $transacciones = Transaccion::where('presupuesto_id', $presupuestoId)->get();

       
        return Inertia::render('ListaTransacciones', [
            'transacciones' => $transacciones,
            'presupuestoId' => $presupuestoId, 
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
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

        $transaccion = Transaccion::create($request->all());
        return response()->json($transaccion, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
       
            $transacciones = Transaccion::where('presupuesto_id', $id)->get();
            dd($transacciones); // Esto detendrá la ejecución y mostrará las transacciones
            return Inertia::render('Transacciones', [
                'transacciones' => $transacciones,
                'presupuestoId' => $id,
            ]);
        
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(transaccione $transaccione)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatetransaccioneRequest $request, transaccione $transaccione)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $transaccion = Transaccion::findOrFail($id);
        $transaccion->delete();
        return response()->json(null, 204);
    }
}
