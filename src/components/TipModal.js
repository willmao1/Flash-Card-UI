import React,  { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import lightBulb from '../images/light-bulb.svg'
function TipModal( {tip} ) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <Button type="button" className="btn btn-primary float-left" onClick={handleShow}><img src={lightBulb} width="35"/></Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Body>{tip}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
}
export default TipModal
