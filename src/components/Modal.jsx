import React from "react";
import { Modal } from "react-bootstrap";

const MyModal = ({ show, onHide, children }) => {
  return (
    <Modal show={show} onHide={() => onHide()} aria-labelledby="example-custom-modal-styling-title">
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default MyModal;
