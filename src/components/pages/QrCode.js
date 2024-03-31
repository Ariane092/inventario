import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';

function QrCode() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3001/cadastro");
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error("Erro ao obter dados da API", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>QR Codes</h2>
            <div>
                {data.map(item => (
                    <div key={item.id}>
                        <h3>ID: {item.id}</h3>
                        <QRCode value={`ID: ${item.id}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QrCode;