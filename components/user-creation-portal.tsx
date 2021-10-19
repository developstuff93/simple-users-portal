import * as React from "react";
import { Card, Button } from "react-bootstrap";

interface Props {
  closePortal(): void;
}

export function UserCreationPortal({ closePortal }: Props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>User Creation Portal</Card.Title>
        <Card.Text>Part 1 tasks will appear on this page</Card.Text>
        <Button variant="secondary" onClick={() => closePortal()}>
          Go back
        </Button>
      </Card.Body>
    </Card>
  );
}
