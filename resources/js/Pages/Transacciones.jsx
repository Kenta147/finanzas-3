import React from 'react';
import ListaTransacciones from '@/Components/ListaTransacciones';
import AgregarTransaccion from '@/Components/AgregarTransacciones.jsx';
import { usePage } from '@inertiajs/inertia-react';

const Transacciones = () => {
    const { presupuestoId } = usePage().props; 

    return (
        <div>
            <h1>Transacciones del Presupuesto {presupuestoId}</h1>
            <ListaTransacciones />
            <AgregarTransaccion presupuestoId={presupuestoId} />  {/* Pasamos el presupuestoId al formulario */}
        </div>
    );
};

export default Transacciones;
