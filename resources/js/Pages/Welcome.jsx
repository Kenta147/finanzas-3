
import ListaPresupuesto from '@/Components/ListaPresupuestos';
import AgregarPresupuesto from '@/Components/AgregarPresupuesto';
import { Head } from '@inertiajs/inertia-react';
import AgregarTransaccion from '@/Components/AgregarTransacciones';


export default function Welcome({ presupuesto }) {
    return (
        <>
            <Head title="Bienvenido" />
            <h1>Hola</h1>

            <ListaPresupuesto/> 
            <AgregarPresupuesto/>
     
            
        </>
    );
}
