import * as React from "react";
import { Card, Button, Table, Container, Form, Alert } from "react-bootstrap";
import useAppState from "../hooks/useAppState";
import BaseModal from "./base-modal";
interface Props {
  closePortal(): void;
}

function AddUserModal({ showAddUser, setShowAddUser }) {
  const { addUser } = useAppState();
  const [error, setError] = React.useState("");

  const [username, setUsername] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleCloseAddUserModal = () => {
    setShowAddUser(false);
  };

  const handleAddUser = () => {
    if (
      !username.length ||
      !firstName.length ||
      !lastName.length ||
      !password.length
    ) {
      setError("All fields are reuiqred");
      return;
    }
    setError("");
    addUser({ username, firstName, lastName, password });
    handleCloseAddUserModal();
  };

  return (
    <BaseModal
      isOpen={showAddUser}
      title="Add User"
      onClose={handleCloseAddUserModal}
      onConfirm={handleAddUser}
    >
      <Form>
        <Form.Group className="mt-2">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
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
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
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

export function UserCreationPortal({ closePortal }: Props) {
  const { users } = useAppState();
  const [showAddUser, setShowAddUser] = React.useState(Boolean);

  const handleOpenAddUserModal = () => {
    setShowAddUser(true);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>User Creation Portal</Card.Title>
        <Table>
          <thead>
            <tr>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Container>
          <Button variant="primary" onClick={handleOpenAddUserModal}>
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
      <AddUserModal showAddUser={showAddUser} setShowAddUser={setShowAddUser} />
    </Card>
  );
}
