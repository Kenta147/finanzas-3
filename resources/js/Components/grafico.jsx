import React, { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/inertia-react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const grafico = () => {
    const { presupuestoId } = usePage().props;
    const [transacciones, setTransacciones] = useState([]);

    useEffect(() => {
        const fetchTransacciones = async () => {
            try {
                const response = await fetch(`/presupuesto/${presupuestoId}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                setTransacciones(data);
            } catch (error) {
                // console.error("Error fetching transacciones:", error);
            }
        };
    
        fetchTransacciones();
    }, [presupuestoId]);

    // Procesar los datos para el gráfico
    const data = transacciones.reduce((acc, transaccion) => {
        const tipo = transaccion.tipo;
        if (!acc[tipo]) {
            acc[tipo] = { name: tipo, value: 0 };
        }
        acc[tipo].value += parseFloat(transaccion.monto);
        return acc;
    }, {});

    const chartData = Object.values(data);

    return (
        <PieChart width={400} height={400}>
            <Pie data={chartData} cx={200} cy={200} outerRadius={80} fill="#8884d8" dataKey="value">
                {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#82ca9d' : '#8884d8'} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default grafico;
