import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

import "./App.css";

function App() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <h1 className="text-center">C.V. Builder</h1>
      <Card className="card">
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <h2 className="text-center">Profile</h2>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control required type="text" placeholder="First name" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control required type="text" placeholder="Last name" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="">
                  <Form.Label>Occupation</Form.Label>
                  <Form.Control type="text" placeholder="optional" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="City" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" placeholder="State" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control type="text" placeholder="Zip" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
            </Form>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Education</h2>
            <Button>Add +</Button>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Work Experience</h2>
            <Button>Add +</Button>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Skills</h2>
            <Button>Add +</Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
}

export default App;
