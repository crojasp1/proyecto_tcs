import React from 'react'
import Navegador from "../assets/internet.png"

const FormasQ = () => {
    const FormasdeQQuieres = [
        {
            title: '1. En tu navegador buscanos',
            desc: '',
            icon: '',
            email: 'www.tcs.com'
        },
        {
            title: '2. Selecciona Quiero Vender ',
            desc: '',
            icon: '',
            email: 'ventas@tcs.com'
        },
        {
            title: 'Sugerencias',
            desc: 'Nos encantaría saber cómo podemos mejorar. Tu opinión es muy importante para nosotros. Envía tus ideas o comentarios.',
            icon: '💡',
            email: 'sugerencias@tcs.com' 
        },
        {
            title: 'Servicio al Cliente',
            desc: 'Contáctanos para cualquier duda sobre envíos, devoluciones o servicios postventa.',
            icon: '📞',
            email: 'scliente@tcs.com'
        }
    ];

    return (
        <div className="contact-us-container">
            <h2>!Asi puedes Vender tus Boletas en ¿Que Quieres?</h2>
            <p>Sigue este sencillo paso a paso para lograrlo </p>

            <div className="contact-grid">
                {FormasdeQQuieres.map((option, index) => (
                    <div key = {index} className="contact-card">
                        <div className="contact-icon">{option.icon}</div>
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