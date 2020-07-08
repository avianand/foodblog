import React, { Component } from "react";
import { Media, Container } from "react-bootstrap";
import "../style.css";

export default function MediaClass(params) {
  return (
    <Container fluid>
      <Media
        bsPrefix="media"
        className="shadow-sm p-6 rounded fluid"
        style={{ margin: "20px" }}
      >
        <img
          width={130}
          height={100}
          className="mr-3 rounded shadow-lg fluid"
          src="https://cdn.dribbble.com/users/2042585/screenshots/10082159/food_review_logo_4x.jpg"
          alt="Generic placeholder"
        />
        <Media.Body className="fluid ">
          <h5>Customer Review</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </Media.Body>
      </Media>
    </Container>
  );
}
