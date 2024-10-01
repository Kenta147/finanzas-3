import React from "react";
import { usePage } from '@inertiajs/inertia-react';

const ListaTransacciones = () => {
    const { transacciones, presupuestoId } = usePage().props;
    const transaccionesList = transacciones || [];
  

    return (
        <div>
            <h2>Lista de Transacciones para el Presupuesto ID: {presupuestoId}</h2>
            {transaccionesList.length > 0 ? (
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">Tipo</th>
                            <th className="border border-gray-300 p-2">Monto</th>
                            <th className="border border-gray-300 p-2">Descripción</th>
                            <th className="border border-gray-300 p-2">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transaccionesList.map((transaccion) => (
                            <tr key={transaccion.id}>
                                <td className="border border-gray-300 p-2">{transaccion.tipo}</td>
                                <td className="border border-gray-300 p-2">{transaccion.monto}</td>
                                <td className="border border-gray-300 p-2">{transaccion.descripcion}</td>
                                <td className="border border-gray-300 p-2">{transaccion.fecha}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            ) : (
                <p>No hay transacciones disponibles para este presupuesto.</p>
            )}
        </div>
    );
};

export default ListaTransacciones;
