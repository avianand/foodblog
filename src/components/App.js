import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import About from "./About";
import Login from "./LoginPage";
import "./style.css";
import history from "../history";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <div className="  ">
      <Router history={history}>
        <Container fluid>
          <Header fluid />
          <Switch>
            <Route path="/" exact component={Body} />
            <Route path="/about" exact component={About} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </Container>
        <Footer fluid />
      </Router>
    </div>
  );
};

export default App;
