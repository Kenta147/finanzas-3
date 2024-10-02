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
    const styles = {
        container: {
            maxWidth: '800px',
            margin: 'auto',
            padding: '2rem',
        },
        card: {
            borderRadius: '15px',
            backgroundColor: '#ffffff',
            border: 'none',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '2rem',
        },
        title: {
            color: '#007bff',
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
        },
        label: {
            fontWeight: '500',
            color: '#495057',
            marginBottom: '0.5rem',
        },
        input: {
            borderRadius: '10px',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ced4da',
            width: '100%',
            marginBottom: '1rem',
            transition: 'all 0.3s ease',
        },
        inputFocus: {
            borderColor: '#007bff',
            boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)',
        },
        button: {
            padding: '12px',
            fontSize: '18px',
            borderRadius: '8px',
            backgroundColor: '#007bff',
            color: '#fff',
            width: '100%',
            transition: 'background-color 0.3s ease',
            border: 'none',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                    <div className="card shadow custom-card">
                        <div className="card-body p-4">
                            <h2 className="text-center mb-4 title">Agregar Transacción</h2>
                            <form onSubmit={handleSubmit}>
                                {/* Tipo de Transacción */}
                                <div className="mb-3">
                                    <label htmlFor="tipo" className="form-label">Tipo de Transacción</label>
                                    <select 
                                        id="tipo" 
                                        value={tipo} 
                                        onChange={(e) => setTipo(e.target.value)}
                                        className="form-select custom-input"
                                    >
                                        <option value="ingreso">Ingreso</option>
                                        <option value="gasto">Gasto</option>
                                    </select>
                                </div>

                                {/* Monto */}
                                <div className="mb-3">
                                    <label htmlFor="monto" className="form-label">Monto</label>
                                    <input 
                                        type="number" 
                                        id="monto" 
                                        value={monto} 
                                        onChange={(e) => setMonto(e.target.value)}
                                        className="form-control custom-input"
                                        placeholder="Ingresa el monto" 
                                        required 
                                    />
                                </div>

                                {/* Descripción */}
                                <div className="mb-3">
                                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                                    <input 
                                        type="text" 
                                        id="descripcion" 
                                        value={descripcion} 
                                        onChange={(e) => setDescripcion(e.target.value)}
                                        className="form-control custom-input"
                                        placeholder="Descripción opcional"
                                    />
                                </div>

                                {/* Fecha */}
                                <div className="mb-3">
                                    <label htmlFor="fecha" className="form-label">Fecha</label>
                                    <input 
                                        type="date" 
                                        id="fecha" 
                                        value={fecha} 
                                        onChange={(e) => setFecha(e.target.value)}
                                        className="form-control custom-input"
                                        required 
                                    />
                                </div>

                                {/* Botón de enviar */}
                                <button type="submit" className="btn btn-primary w-100 custom-button">Agregar Transacción</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgregarTransaccion;

