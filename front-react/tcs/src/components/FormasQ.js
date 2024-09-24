import React from 'react'
import '../styles/FormasQ.css';
import Navegador from "../assets/internet.png"

const FormasQ = () => {
    const FormasdeQQuieres = [
        {
            title: '1.',
            description: 'Ingresa a nuesto sitio web ',
            imagen : Navegador,
            email: 'www.tcs.com'
        },
        {
            title: '2.',
            description: 'Das Clic en Quiero Vender',
            imagen : Navegador
        },
        {
            title: '3.',
            description: 'Selecciona el aforo',
            imagen : Navegador
        },
        {
            title: '4.',
            description: 'Define el precio de venta',
            imagen : Navegador
        },
        {
            title: '5.',
            description: 'Listoo, Ya tienes tu evento Montado, a darle!!!',
            imagen : Navegador
        }
    ];

    return (
        <div className="contact-us-container">
            <h2>!Asi puedes Vender tus Boletas en ¿Que Quieres?</h2>
            <p>Sigue este sencillo paso a paso para lograrlo </p>

            <div className="contact-grid">
                {FormasdeQQuieres.map((option, index) => (
                    <div key = {index} className="contact-card">
                            <div> 
                                <img src={option.imagen} alt={option.imagen}/>
                            </div>
                        <h3>{option.title}</h3>
                        <p>{option.description}</p>
                        <a href={`mailto:${option.email}`} className="contact-email">
                            {option.email}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FormasQ