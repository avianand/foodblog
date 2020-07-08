import React, { Component } from "react";
import "./style.css";

import Carousel from "./microcomponents/carousel";
import {
  Card,
  Button,
  Jumbotron,
  Container,
  Row,
  Col,
  Tab,
} from "react-bootstrap";
import JumbotronClass from "./microcomponents/jumbotron";
import CardClass from "./microcomponents/cards";
import MediaClass from "./microcomponents/media";
import DesignBlock from "./microcomponents/DesignBlock";

export default function Body(params) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Container>
            <br />
            <br />
            <br />
            <br />
            <br />
          </Container>
          <Container fluid>
            <JumbotronClass />
          </Container>
          <Container fluid>
            <Row>
              <Col sm>
                <CardClass
                  imageSrc={
                    "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,w_350,h_250/k%2FPhoto%2FRecipes%2F2019-08-how-to-juiciest-turkey-meatballs%2FHow-to-Make-the-Best-Juiciest-Turkey-Meatballs_055"
                  }
                  title={"Turkey Meatballs"}
                />
              </Col>
              <Col sm>
                <CardClass
                  imageSrc={
                    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg"
                  }
                  title={"Smoked Salmon"}
                />
              </Col>

              <Col sm>
                <CardClass
                  imageSrc={
                    "https://www.helpguide.org/wp-content/uploads/fast-foods-candy-cookies-pastries-768.jpg"
                  }
                  title={"Chili Cheese Burger & Fries"}
                />
              </Col>
              <Col sm>
                <CardClass
                  imageSrc={
                    "https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=1200&height=800"
                  }
                  title={"Samosa"}
                />
              </Col>
            </Row>
          </Container>
          <MediaClass />

          <Carousel />

          <DesignBlock />
          <br />
          <br />
          <br />
        </Col>
      </Row>
    </Container>
  );
}
