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
        <div className = "bg-image hover-overlay ripple shadow-1-strong rounded" data-mdb-ripple-color="light">
          <img src={lightBulb}  className="float-left w-10" onClick={handleShow} width="35"/>
          <a href="#!">
              <div class="mask" style={{"background-color": "hsla(0, 0%, 98%, 0.2)"}}></div>
          </a>
        </div>
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
