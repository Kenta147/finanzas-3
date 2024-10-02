import React from 'react';

import AgregarTransaccion from '@/Components/AgregarTransacciones.jsx';
import { usePage } from '@inertiajs/inertia-react';
import ListaTransacciones from '@/Components/ListaTransacciones';

const Transacciones = () => {
    const pageProps = usePage().props;
    console.log('Presupuesto ID:', pageProps.presupuestoId);
   
    const { presupuestoId } = pageProps; 

    return (
        <div>
            <h1>Transacciones del Presupuesto {presupuestoId}</h1>
           
            <AgregarTransaccion presupuestoId={presupuestoId} />  
           
        </div>
    );
};

export default Transacciones;
