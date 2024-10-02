<?php

namespace App\Http\Controllers;

use App\Models\Transaccione;
use App\Http\Requests\StoretransaccioneRequest;
use App\Http\Requests\UpdatetransaccioneRequest;
use Illuminate\Http\Request;

class TransaccioneController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(transaccione::all());
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


        $transaccion = transaccione::create($request->all());


        return redirect()->back()->with('success', 'Transacción creada exitosamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show($presupuestoId)
    {
        $transacciones = transaccione::where('presupuesto_id', $presupuestoId)->get();


        return response()->json($transacciones);
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
        $transaccion = transaccione::findOrFail($id);
        $transaccion->delete();
        return response()->json(null, 204);
    }
    public function getTransacciones($presupuestoId)
    {

        $transacciones = transaccione::where('presupuesto_id', $presupuestoId)->get();

        return response()->json($transacciones);
    }
}
