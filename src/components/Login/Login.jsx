import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <h2>Iniciar Sesion</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email" style={{ marginTop: 20 }}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            placeholder="Ingrese su correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password" style={{ marginTop: 20}}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          block="true"
          size="lg"
          type="submit"
          disabled={!validateForm()}
          style={{ marginTop: 20 }}
        >
          Iniciar
        </Button>
      </Form>
    </div>
  );
}
