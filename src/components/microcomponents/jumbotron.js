import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "../style.css";

export default function JumbotronClass(params) {
  return (
    <Jumbotron className="shadow  mb-5 rounded">
      <h1 class="j-para">Hello, Foodie!</h1>
      <p class="j-para">
        Welcome to the blog. <br />
        Read about some amazing dining experiences from our expert food
        bloggers.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
}
