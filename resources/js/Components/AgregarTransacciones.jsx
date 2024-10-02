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
        <form onSubmit={handleSubmit} className="container mt-4">
            <h2 className="text-center mb-4">Agregar Transacción</h2>
            
            <div className="mb-3">
                <label htmlFor="tipo" className="form-label">Tipo de Transacción</label>
                <select 
                    id="tipo" 
                    value={tipo} 
                    onChange={(e) => setTipo(e.target.value)}
                    className="form-select"
                >
                    <option value="ingreso">Ingreso</option>
                    <option value="gasto">Gasto</option>
                </select>
            </div>
            
            <div className="mb-3">
                <label htmlFor="monto" className="form-label">Monto</label>
                <input 
                    type="number" 
                    id="monto" 
                    value={monto} 
                    onChange={(e) => setMonto(e.target.value)}
                    className="form-control"
                    required 
                />
            </div>
            
            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripción</label>
                <input 
                    type="text" 
                    id="descripcion" 
                    value={descripcion} 
                    onChange={(e) => setDescripcion(e.target.value)}
                    className="form-control"
                />
            </div>
            
            <div className="mb-3">
                <label htmlFor="fecha" className="form-label">Fecha</label>
                <input 
                    type="date" 
                    id="fecha" 
                    value={fecha} 
                    onChange={(e) => setFecha(e.target.value)}
                    className="form-control"
                    required 
                />
            </div>
            
            <button type="submit" className="btn btn-primary w-100">Agregar Transacción</button>
        </form>
    );
};

export default AgregarTransaccion;
