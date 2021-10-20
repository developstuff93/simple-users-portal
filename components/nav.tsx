import * as React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

interface Props {
  selectPortal(index?: number): void;
}

export function CourierNav({ selectPortal }: Props) {
  return (
    <Navbar bg="light" expand="lg" className="mb-5">
      <Container>
        <Navbar.Brand href="#home">Users Management</Navbar.Brand>
        <Navbar.Collapse role="navigation">
          <Nav className="me-auto">
            <Nav.Link onClick={() => selectPortal(undefined)}>Home</Nav.Link>
            <Nav.Link onClick={() => selectPortal(1)}>
              User Creation Portal
            </Nav.Link>
            <Nav.Link onClick={() => selectPortal(2)}>Patient Portal</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
