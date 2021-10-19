import * as React from "react";
import * as ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";

import { PatientPortal } from "./patient-portal";
import { UserCreationPortal } from "./user-creation-portal";
import { CourierNav } from "./nav";
import AppStateProvider from "../hooks/AppStateProvider";

function App() {
  const [portal, selectPortal] = React.useState<number>(undefined);

  if (portal === 1) {
    return (
      <Container>
        <CourierNav selectPortal={selectPortal} />
        <UserCreationPortal
          closePortal={() => selectPortal(undefined)}
        ></UserCreationPortal>
      </Container>
    );
  }
  if (portal === 2) {
    return (
      <Container>
        <CourierNav selectPortal={selectPortal} />
        <PatientPortal
          closePortal={() => selectPortal(undefined)}
        ></PatientPortal>
      </Container>
    );
  }

  return (
    <Container>
      <CourierNav selectPortal={selectPortal} />
      <Card>
        <Card.Body>
          <Card.Title>Welcome!</Card.Title>
          <Card.Text>
            <p>A few quick tips to help out:</p>
            <ul>
              <li>
                <strong>DON'T</strong> use a database. It will take too much
                time to get one set up.
              </li>
              <li>
                <strong>DON'T</strong> focus on styling. You're not being tested
                on the visual part of the UI.
              </li>
              <li>
                <strong>DO</strong> complete at least part 1, and dive into part
                2 if you have the time.
              </li>
              <li>
                <strong>DO</strong> focus on code organization and state
                management.
              </li>
              <li>
                <strong>DO</strong> create default patients and case managers if
                it speeds up your testing.
              </li>
            </ul>
            <hr />
            <p className="mb-0">
              Feel free to get in touch if you have any questions. Good luck!
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

ReactDOM.render(
  <AppStateProvider>
    <App />
  </AppStateProvider>,
  document.getElementById("root")
);
