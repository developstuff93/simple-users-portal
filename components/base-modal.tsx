import * as React from "react";
import { Modal, Button } from "react-bootstrap";

interface ModalProps {
  title: String;
  isOpen: Boolean;
  onClose: React.MouseEventHandler;
  onConfirm: React.MouseEventHandler;
  children: React.ReactNode;
}

export default function BaseModal({
  title,
  isOpen,
  onClose,
  onConfirm,
  children,
}: ModalProps) {
  return (
    <Modal show={isOpen}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{children}</Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
