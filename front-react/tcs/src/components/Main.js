import React from 'react';
import "../styles/Main.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id='color-buscar'>
      <Container fluid>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;