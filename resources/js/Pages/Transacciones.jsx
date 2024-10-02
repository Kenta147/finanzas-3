import React from 'react';

import AgregarTransaccion from '@/Components/AgregarTransacciones.jsx';
import { usePage } from '@inertiajs/inertia-react';
import ListaTransacciones from '@/Components/ListaTransacciones';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grafico from '@/Components/Grafico';

const Transacciones = () => {
    const pageProps = usePage().props;
    console.log('Presupuesto ID:', pageProps.presupuestoId);
   
    const { presupuestoId, transacciones} = pageProps; 

    return (
        <div>
            <h1>Transacciones del Presupuesto {presupuestoId}</h1>
           
            <AgregarTransaccion presupuestoId={presupuestoId} />  
           <Grafico transacciones={transacciones}/>
        </div>
    );
};

export default Transacciones;
