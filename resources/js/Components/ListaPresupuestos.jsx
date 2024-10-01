import React from "react";
import { usePage } from '@inertiajs/inertia-react';

const ListaPresupuesto = () => {
    const { presupuesto } = usePage().props;

    const handleButtonClick = (presupuestoId) => {
        window.open(`/presupuesto/${presupuestoId}`, '_blank');
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-8">
            <h1 className="text-4xl font-bold mb-8 text-white tracking-wider shadow-lg">
                Presupuesto
            </h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {presupuesto.data.map((item) => (
                    <button
                        key={item.id}
                        className="bg-white text-blue-700 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-100"
                        onClick={() => handleButtonClick(item.id)}
                    >
                        <div className="text-center">
                            <p className="text-lg font-semibold">
                                Mes {item.mes}
                            </p>
                            <p className="text-sm text-gray-500">
                                Año {item.ano}
                            </p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ListaPresupuesto;
