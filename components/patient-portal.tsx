import * as React from "react";
import { Card, Button, Form, Alert, Table, Container } from "react-bootstrap";
import useAppState from "../hooks/useAppState";
import BaseModal from "./base-modal";

interface Props {
  closePortal(): void;
}

function AddPatientModal({ showAddPatient, setShowAddPatient }) {
  const { addPatient, users } = useAppState();
  const [error, setError] = React.useState("");

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [manager, setManager] = React.useState(String(users[0].id));

  const userMap = {};
  users.forEach((user) => {
    userMap[user.id] = `${user.firstName} ${user.lastName}`;
  });
  const userOptions = users.map((user) => String(user.id));

  const handleCloseAddPatient = () => {
    setShowAddPatient(false);
  };

  const handleAddPatient = () => {
    if (!firstName.length || !lastName.length || !manager.length) {
      setError("All fields are reuiqred");
      return;
    }
    setError("");
    addPatient({ firstName, lastName, manager });
    handleCloseAddPatient();
  };

  return (
    <BaseModal
      isOpen={showAddPatient}
      title="Add User"
      onClose={handleCloseAddPatient}
      onConfirm={handleAddPatient}
    >
      <Form>
        <Form.Group className="mt-2">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mt-2">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mt-2">
          <Form.Label>Manager</Form.Label>
          <Form.Control
            as="select"
            value={manager}
            required
            onChange={(e) => setManager(e.target.value)}
          >
            {userOptions.map((userId) => (
              <option key={userId} value={userId}>
                {userMap[userId]}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        {error && (
          <Alert className="mt-2" variant="danger">
            {error}
          </Alert>
        )}
      </Form>
    </BaseModal>
  );
}

export function PatientPortal({ closePortal }: Props) {
  const { patients, users } = useAppState();
  const [showAddPatient, setShowAddPatient] = React.useState(Boolean);

  const userMap = {};
  users.forEach((user) => {
    userMap[user.id] = `${user.firstName} ${user.lastName}`;
  });

  const handleOpenAddPatientModal = () => {
    setShowAddPatient(true);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Patient Portal</Card.Title>
        <Table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Manager</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.firstName}</td>
                <td>{patient.lastName}</td>
                <td>{userMap[patient.manager]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Container>
          <Button variant="primary" onClick={handleOpenAddPatientModal}>
            Add User
          </Button>
          <Button
            className="mx-2"
            variant="secondary"
            onClick={() => closePortal()}
          >
            Go back
          </Button>
        </Container>
      </Card.Body>
      <AddPatientModal
        showAddPatient={showAddPatient}
        setShowAddPatient={setShowAddPatient}
      />
    </Card>
  );
}
