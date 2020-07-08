import React, { Component } from "react";
import "./style.css";
import icon from "../assets/img/icon.png";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export default function Header(params) {
  return (
    <div className="">
      <>
        <Navbar
          bg="dark"
          variant="dark"
          fixed="top"
          collapseOnSelect
          className="shadow-lg mb-5 bg-black rounded fluid"
        >
          <Navbar.Brand>
            <img
              src={icon}
              width="100"
              height="45"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">About</Nav.Link>
              </Nav.Item>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="find yummy recipes!"
                className="mr-sm-2"
              />
            </Form>
            <Button>Contact</Button>
          </Navbar.Collapse>
        </Navbar>
      </>
    </div>
  );
}
