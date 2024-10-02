import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// Procesar los datos para el gráfico
const data = [
    { name: "A", value: 12 },
    { name: "B", value: 18 },
    { name: "C", value: 22 },
    { name: "D", value: 30 },
];

const SimpleGraficoBarras = () => {
    return (
        <BarChart width={500} height={300} data={data}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
    );
};

export default SimpleGraficoBarras;
