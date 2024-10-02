<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\presupuesto;
use Illuminate\Http\Request;
use App\Http\Requests\StorepresupuestoRequest;
use App\Http\Requests\UpdatepresupuestoRequest;

class presupuestoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $presupuestos = presupuesto::all();

        return Inertia::render("Components/ListaPresupuesto.jsx", ['presupuestos' => $presupuestos]);
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
            'monto' => 'required|numeric',
            'mes' => 'required|integer|min:1|max:12',
            'ano' => 'required|integer',


        ]);

        $presupuesto = Presupuesto::create($request->all());
        return response()->json($presupuesto, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $presupuesto = Presupuesto::findOrFail($id);
        
        return Inertia::render('Transacciones', [
            'presupuesto' => $presupuesto,
            'presupuestoId' => $presupuesto->id,  // Aquí pasamos el id de forma explícita
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(presupuesto $presupuesto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatepresupuestoRequest $request, presupuesto $presupuesto)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $presupuesto = Presupuesto::findOrFail($id);
        $presupuesto->delete();
        return response()->json(null, 204);
    }
}
