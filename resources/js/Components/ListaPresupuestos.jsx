import React from "react";
import { usePage } from "@inertiajs/inertia-react";

const ListaPresupuesto = () => {
    const { presupuesto } = usePage().props;

    const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];

    const handleButtonClick = (presupuestoId) => {
        window.open(`/presupuesto/${presupuestoId}`, "_blank");
    };

    return (
        <div
            className="d-flex flex-column align-items-center min-vh-100 bg-gradient"
            style={{
                background: "linear-gradient(to right, #38a169, #4299e1)",
            }}
        >
            <h1 className="display-4 text-white mb-4 text-center">
                Presupuesto
            </h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {presupuesto.data.map((item) => (
                        <div className="col" key={item.id}>
                            <button
                                className="btn btn-light text-primary p-4 rounded shadow-sm w-100 h-100 d-flex flex-column justify-content-center"
                                onClick={() => handleButtonClick(item.id)}
                            >
                                <div className="text-center">
                                    <p
                                        className="h5 font-weight-bold mb-0"
                                        title={meses[item.mes - 1]}
                                    >
                                        {meses[item.mes - 1]}{" "}
                                        {/* Abreviar si es necesario */}
                                    </p>
                                    <p className="small text-muted">
                                        Año {item.ano}
                                    </p>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListaPresupuesto;
