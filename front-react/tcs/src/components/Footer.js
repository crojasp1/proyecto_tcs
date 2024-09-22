import React from 'react'
import {Link} from 'react-router-dom'
import tcs from '../assets/tcs.jpg'
import Nav from 'react-bootstrap/Nav'
import "../styles/Footer.css"

const Footer = () => {
  
  return (
    <div>
      <footer className='text-white py-4 bg-dark'>
        <div className='container'>
          <nav className='row'>
            <Link to= '/' className='col-12 col-md-3 d-flex align-items-center justify-content-center'>
              <img src={tcs} height="80px" width="80px" alt='imagen de la pagina'/>
            </Link>
            
            <ul className='col-12 col-md-3 list-unstyled'>
              <li className='text-center' id='title-one'>TCS</li>
              <li className='text-center' id='body-f'>En esta página web podrás realizar las compras de boletería de tu evento favorito.</li>
            </ul>

            <ul className='col-12 col-md-3 list-unstyled'>
              <li className='text-center' id='title-two'>Enlaces</li>
              <Nav className='d-flex justify-content-center'>
                <Nav.Link href="#action1" id='texto-blanco'>Eventos Disponibles</Nav.Link>
                <Nav.Link href="#action2" id='texto-blanco'>¿Que Quieres?</Nav.Link>
                <Nav.Link href="#action3" id='texto-blanco'>Contactanos</Nav.Link>
              </Nav>
            </ul>

            <ul className='col-12 col-md-3 list-unstyled'>
              <li className='text-center' id='title-three'>Síguenos</li>
              <li className='d-flex justify-content-between'>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i class="bi bi-twitter-x"></i>
                </a>  
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i class="bi bi-youtube"></i>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i class="bi bi-tiktok"></i>
                </a>
              </li>
            </ul>

            <div className='container' id='creditos'>
              <p className='text-center ab-0 mt-2'>Página web realizada por el Grupo 1</p>
            </div>

          </nav>
        </div>
      </footer>
    </div>
  )

}

/*function Footer() {
  return (
    <div>Footer</div>
  )
} */

  export default Footer;