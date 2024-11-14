// components/Auth/SignupModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SignupModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Signup Successful</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Your signup was successful! You can now log in.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignupModal;
