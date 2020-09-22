import React from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import Brandbar from "../brandbar/Brandbar";
import Navi from "../navi/Navi";
import Dashboard from "../dashboard/Dashboard";
import { Switch, Route } from "react-router-dom";
import DetailProduct from "../detailProduct/DetailProduct";
import NotFound from "../common/NotFound";
import Footer from "../footer/Footer";
import SignUp from "../auth/SignUp";
import SignIn from "../auth/SignIn";

function App() {
  return (
    <div>
      <Container className="themed-container1" fluid={true}>
        <Row>
          <div id="hello">
            <Brandbar></Brandbar>
          </div>
        </Row>
        <Row>
          <div id="navi-div">
            <Navi></Navi>
          </div>
        </Row>
        <Row>
          <Switch>
            <Route path="/" exact component={Dashboard}></Route>
            <Route
              path="/productDetail:productId"
              exact
              component={DetailProduct}
            ></Route>
             <Route
              path="/signup"
              exact
              component={SignUp}
            ></Route>
            <Route
              path="/signin"
              exact
              component={SignIn}
            ></Route>
            <Route exact component={NotFound}></Route>
          </Switch>
        </Row>
        <Row>
          <Col>
            <Footer></Footer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
