import React, { Component } from "react";
import "./style.css";
import bootstrapsolid from "../assets/img/bootstrap-solid.svg";
import { Container, Form, Image, Input } from "react-bootstrap";

export default function Login(props) {
  return (
    <Container fluid className="" style={{ marginTop: "100px" }}>
      <Form className="form-signin">
        <Image
          class="mb-4"
          src={bootstrapsolid}
          alt=""
          width="72"
          height="72"
        />
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" class="sr-only">
          Email address
        </label>
        <Form.Control
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
        />
        <label for="inputPassword" class="sr-only">
          Password
        </label>
        <Form.Control
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
        />
        <div class="checkbox mb-3">
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
      </Form>
    </Container>
  );
}
