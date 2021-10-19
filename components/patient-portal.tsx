import * as React from "react";
import { Card, Button } from "react-bootstrap";

interface Props {
  closePortal(): void;
}

export function PatientPortal({ closePortal }: Props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Patient Portal</Card.Title>
        <Card.Text>Part 2 tasks will appear on this page</Card.Text>
        <Button variant="secondary" onClick={() => closePortal()}>
          Go back
        </Button>
      </Card.Body>
    </Card>
  );
}
