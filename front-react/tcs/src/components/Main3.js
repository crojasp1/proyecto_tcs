import React from 'react'
import fondo from "../assets/fondo.jpg"
import "../styles/Main3.css";
import Button from 'react-bootstrap/Button';

function Main3() {
  return (
    <div className='Main3'>
        <div className='contenido'>
            <img src={fondo} alt="imagen de fondo" id='imagen-fondo'/>
                <div className='texto'>
                    <h1>¿Que Quieres?</h1>
                    <h3>Es una iniciativa para promover y comprar boletas de nuevo eventos siendo tu el creador
                        o participando en ellos de una manera segura y transparente.
                    </h3>
                    <div className='botones'>
                    <Button id='comprar'>Comprar</Button>
                    <Button id='vender'>Vender</Button>
                    </div>
                </div>

        </div>
    </div>
  )
}

export default Main3