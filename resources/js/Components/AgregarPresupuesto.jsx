import React, { useState } from "react";
import { usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

const AgregarPresupuesto = () => {
    const { csrf_token } = usePage().props;
    const [monto, setMonto] = useState('');
    const [mes, setMes] = useState('');
    const [ano, setAño] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/presupuesto/store', { monto, mes, ano });
    };

    return (
        <div className="container mx-auto mt-10 max-w-md">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">Agregar Presupuesto</h2>
            <form onSubmit={handleSubmit} className="bg-gray-800 shadow-md rounded-lg p-6">
                <input type="hidden" name="_token" value={csrf_token} />

                <div className="mb-4">
                    <label htmlFor="monto" className="block text-sm font-medium text-gray-300">Monto:   </label>
                    <input
                        type="number"
                        className="form-control mt-1 block w-full border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 bg-gray-700 text-black placeholder-gray-400"
                        id="monto"
                        name="monto"
                        required
                        value={monto}
                        onChange={(e) => setMonto(e.target.value)}
                        placeholder="Ej: 1500.00"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="mes" className="block text-sm font-medium text-gray-300">Mes: </label>
                    <select
                        className="form-control mt-1 block w-full border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 bg-gray-700 text-teal-300 placeholder-gray-400"
                        id="mes"
                        name="mes"
                        required
                        value={mes}
                        onChange={(e) => setMes(e.target.value)}
                    >
                        <option value="" className="text-gray-400">Seleccione un mes:</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i} value={i + 1} className="text-teal-300">
                                {new Date(0, i).toLocaleString('default', { month: 'long' })}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="ano" className="block text-sm font-medium text-gray-300">Año: </label>
                    <input
                        type="number"
                        className="form-control mt-1 block w-full border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 bg-gray-700 text-black placeholder-gray-400"
                        id="ano"
                        name="ano"
                        required
                        value={ano}
                        onChange={(e) => setAño(e.target.value)}
                        placeholder="Ej: 2024"
                    />
                </div>

                <button type="submit" className="btn btn-success w-full bg-green-600 hover:bg-green-700 text-black font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">Guardar</button>
            </form>
        </div>
    );
};

export default AgregarPresupuesto;
