import React, { useState } from "react";
import { usePage} from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';


const AgregarPresupuesto = () => {
    const { csrf_token } = usePage().props;
    const [monto, setMonto] = useState('');
    const [mes, setMes] = useState('');
    const [ano, setAño] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault(); 

        // Enviar los datos correctos con Inertia
        Inertia.post('/presupuesto/store', { monto, mes, ano });

    };

    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit}>
         
                <input type="hidden" name="_token" value={csrf_token} />

                <div className="form-group">
                    <label htmlFor="monto">Monto</label>
                    <input type="text" 
                        className="form-control" 
                        id="monto" 
                        name="monto" 
                        required
                        value={monto} 
                        onChange={(e) => setMonto(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mes">Mes</label>
                    <input type="text" 
                        className="form-control" 
                        id="mes" 
                        name="mes" 
                        required
                        value={mes} 
                        onChange={(e) => setMes(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ano">Año</label>
                    <input type="text" 
                        className="form-control" 
                        id="ano" 
                        name="ano" 
                        required
                        value={ano} 
                        onChange={(e) => setAño(e.target.value)} 
                    />
                </div>

                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    );
};

export default AgregarPresupuesto;
