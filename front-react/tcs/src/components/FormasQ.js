import React from 'react'
import '../styles/FormasQ.css';
import navegador from "../assets/internet.png"
import clic from "../assets/clic.png"
import aforo from "../assets/aforo.png"
import precio from "../assets/precios.png"
import check from "../assets/check.png"

const FormasQ = () => {
    const FormasdeQQuieres = [
        {
            title: '1.',
            description: 'Ingresa a nuesto sitio web ',
            imagen : navegador,
            email: 'www.tcs.com'
        },
        {
            title: '2.',
            description: 'Das Clic en Quiero Vender',
            imagen : clic
        },
        {
            title: '3.',
            description: 'Selecciona el aforo',
            imagen : aforo
        },
        {
            title: '4.',
            description: 'Define el precio de venta',
            imagen : precio
        },
        {
            title: '5.',
            description: 'Listoo, Ya tienes tu evento Montado, a darle!!!',
            imagen : check
        }
    ];

    return (
        <div className='fondo'>
            <div className="texto-qquieres">
                <h2>!Asi puedes Vender tus Boletas en ¿Que Quieres?</h2>
                <p>Sigue este sencillo paso a paso para lograrlo </p>

                <div className="contenido-grid">
                    {FormasdeQQuieres.map((option, index) => (
                        <div key = {index} className="cards">
                                <div> 
                                    <img src={option.imagen} alt={option.imagen}/>
                                </div>
                            <h3>{option.title}</h3>
                            <p>{option.description}</p>
                            <a href={`mailto:${option.email}`} className="email">
                                {option.email}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FormasQ