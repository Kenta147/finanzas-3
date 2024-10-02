import ListaPresupuesto from '@/Components/ListaPresupuestos';
import AgregarPresupuesto from '@/Components/AgregarPresupuesto';
import { Head } from '@inertiajs/inertia-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AgregarTransaccion from '@/Components/AgregarTransacciones';

export default function Welcome({ presupuesto }) {
    return (
        <>
            <Head title="Bienvenido" />
            <div className="container mt-5">
                <h1 className="text-center mb-4 text-dark">Bienvenido a tu Gestor de Presupuestos</h1>
                <p className="text-center mb-4 text-light">Aquí puedes agregar y administrar tus presupuestos.</p>

                <div className="card mb-4 bg-dark text-light">
                    <div className="card-header bg-secondary">
                        <h2 className="mb-0">Agregar Presupuesto</h2>
                    </div>
                    <div className="card-body">
                        <AgregarPresupuesto />
                    </div>
                </div>

                <div className="card bg-dark text-light">
                    <div className="card-header bg-secondary">
                        <h2 className="mb-0">Lista de Presupuestos</h2>
                    </div>
                    <div className="card-body">
                        <ListaPresupuesto />
                    </div>
                </div>
            </div>
        </>
    );
}
