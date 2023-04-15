import React from "react";

import Modal from "react-bootstrap/Modal";

import TimeFilters from "./TimeFilters";
import TypeFilters from "./TypeFilters";

function FiltersModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Filter by</Modal.Title>
      </Modal.Header>
      <Modal.Body className="border-bottom">
        <h5>Type:</h5>
        <TypeFilters
          enabled={props.enabledTypes}
          onChange={props.onTypeFiltersChange}
        />
      </Modal.Body>
      <Modal.Body>
        <h5>Time:</h5>
        <TimeFilters
          enabled={props.enabledTimes}
          onChange={props.onTimeFiltersChange}
        />
      </Modal.Body>
    </Modal>
  );
}

export default FiltersModal;
