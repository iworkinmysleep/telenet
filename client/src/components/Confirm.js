import React from 'react'
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap'

const Confirm = (props) => {

  
  return (
    <>

<Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Are you sure?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Check over data and edit if necessary.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='info'>Edit</Button>
        <Button onClick={props.onHide}>Add Room</Button>
      </Modal.Footer>
    </Modal>
    
    </>
  )
  
}

export default Confirm
