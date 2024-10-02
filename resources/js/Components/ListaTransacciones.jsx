import React, { useEffect, useState } from 'react';

const ListaTransacciones = ({ presupuesto_id }) => {
    const [transaction, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/presupuesto/${presupuesto_id}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setTransactions(data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        if (presupuesto_id) {
            fetchTransactions();
        }
    }, [presupuesto_id]);

    return (
        <div>
            <h2>Transacciones para el presupuesto ID: {presupuesto_id}</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descripción</th>
                        <th>Monto</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.monto}</td>
                            <td>{new Date(transaction.fecha).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaTransacciones;
