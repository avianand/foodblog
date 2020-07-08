import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default function CardClass(props) {
  return (
    <Card className="shadow-sm rounded">
      <Card.Img
        variant="top"
        height="250px"
        width="150px"
        src={props.imageSrc}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Some quick ekjgxample text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
}
