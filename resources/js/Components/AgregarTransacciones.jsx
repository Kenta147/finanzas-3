import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const AgregarTransaccion = ({ presupuestoId }) => {
    const [tipo, setTipo] = useState('ingreso');
    const [monto, setMonto] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha, setFecha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.post('/transacciones/store', {
            tipo,
            monto,
            descripcion,
            fecha,
            presupuesto_id: presupuestoId, 
        });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <h2 className="text-xl mb-4">Agregar Transacción</h2>
            
            <div className="mb-4">
                <label htmlFor="tipo" className="block mb-1">Tipo de Transacción</label>
                <select 
                    id="tipo" 
                    value={tipo} 
                    onChange={(e) => setTipo(e.target.value)}
                    className="w-full border p-2"
                >
                    <option value="ingreso">Ingreso</option>
                    <option value="gasto">Gasto</option>
                </select>
            </div>
            
            <div className="mb-4">
                <label htmlFor="monto" className="block mb-1">Monto</label>
                <input 
                    type="number" 
                    id="monto" 
                    value={monto} 
                    onChange={(e) => setMonto(e.target.value)}
                    className="w-full border p-2"
                    required 
                />
            </div>
            
            <div className="mb-4">
                <label htmlFor="descripcion" className="block mb-1">Descripción</label>
                <input 
                    type="text" 
                    id="descripcion" 
                    value={descripcion} 
                    onChange={(e) => setDescripcion(e.target.value)}
                    className="w-full border p-2"
                />
            </div>
            
            <div className="mb-4">
                <label htmlFor="fecha" className="block mb-1">Fecha</label>
                <input 
                    type="date" 
                    id="fecha" 
                    value={fecha} 
                    onChange={(e) => setFecha(e.target.value)}
                    className="w-full border p-2"
                    required 
                />
            </div>
            
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Agregar Transacción</button>
        </form>
    );
};

export default AgregarTransaccion;
