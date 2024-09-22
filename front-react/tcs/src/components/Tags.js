import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import audi from '../assets/audi.jpg'


import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
function Tags() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={audi}/>
      <Card.Body>
        <Card.Title>Audi Visionary Drive</Card.Title>
        <Card.Text>
          Es un evento que celebra la innovación y el diseño de Audi. Aquí podrán disfrutar
          de una exhibición de modelos icónicos y avances tecnológicos.
        </Card.Text>
        <>
      <Button variant="primary" onClick={handleShow}>
        GO!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      </Card.Body>
    </Card>
    
  );
}

export default Tags;