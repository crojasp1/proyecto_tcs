import React from "react";
import '../styles/Main4.css';

const Contactanos = () => {
    const opcionesContacto = [
        {
            title: 'Soporte Técnico',
            desc: '¿Tienes problemas técnicos? Contáctanos para poder brindarte la ayuda que necesitas.',
            icon: '🛠️',
            email: 'soporte@tcs.com'
        },
        {
            title: 'Ventas',
            desc: 'Consulta acerca de nuestros productos y servicios o haz seguimiento de tus compras realizadas.',
            icon: '💼',
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
            <h2>Contáctanos</h2>
            <p>Selecciona una opción para brindarte la ayuda adecuada:</p>

            <div className="contact-grid">
                {opcionesContacto.map((option, index) => (
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

export default Contactanos;