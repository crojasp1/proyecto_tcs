import React from 'react'
import "../styles/Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import tcs from "../assets/tcs.jpg"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';
import DropDown from '../components/CarDropdown/DropDown';

function Header() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary py-1" id='color-nav'>
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"} className='me-5 ms-3'><img src={tcs} height="80px" width="80px" alt='imagen de la pagina'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >  
            <Nav.Link as={Link} to={"/Eventos"} id='texto-blanco'className='distancia'>Eventos Disponibles</Nav.Link>
            <Nav.Link as={Link}  to={"/Quieres"} id='texto-blanco' className='distancia' >¿Que Quieres?</Nav.Link>
            <Nav.Link as={Link}  to={"/Contactanos"}id='texto-blanco' className='distancia'>Contactanos</Nav.Link>
            <DropDown />

          </Nav>
        </Navbar.Collapse>
      </Container>
      <section>
        <Outlet></Outlet>
      </section>
    </Navbar>
    </>
  );
}

export default Header;