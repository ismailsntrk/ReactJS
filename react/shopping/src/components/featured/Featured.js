import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Featured.css";

export default function Featured() {
  return (
    <div className="feat-div">
      <Container className="themed-container" fluid="lg">
        <Row xs="3">
          <Col>
            <div className="title-row2">
              <hr id="line-thing" />
            </div>
          </Col>
          <Col xs="4">
            <div className="title-row">
              <h3>AS FEATURED IN</h3>
            </div>
          </Col>
          <Col xs="4">
            <div className="title-row2">
              <hr id="line-thing" />
            </div>
          </Col>
        </Row>
        <Row xs="3">
          <Col xs="3">
            <img
              alt="#"
              className="featured-img"
              src="//cdn.shopify.com/s/files/1/1946/2989/files/black_cceec1fc-4498-4c4f-b641-6464ae6858c1_grande.jpg?v=1542710672"
            />
          </Col>
          <Col xs="3">
            <img
              alt="#"
              className="featured-img"
              src="//cdn.shopify.com/s/files/1/1946/2989/files/kontrol_grande.jpg?v=1542696335"
            />
          </Col>
          <Col xs="3">
            <img
              alt="#"
              className="featured-img"
              src="//cdn.shopify.com/s/files/1/1946/2989/files/chicago_grande.jpg?v=1542696346"
            />
          </Col>
          <Col xs="3">
            <img
              alt="#"
              className="featured-img"
              src="//cdn.shopify.com/s/files/1/1946/2989/files/glovel_grande.jpg?v=1542696366"
            />
          </Col>
        </Row>
        <Row xs="3">
          <Col xs="4">
            <img
              alt="#"
              className="featured-img2"
              src="//cdn.shopify.com/s/files/1/1946/2989/files/huff-big_ee440e5d-eabc-4ac2-96fb-dea227050064_grande.jpg?v=1542710604"
            />
          </Col>
          <Col xs="4">
            <img
              alt="#"
              className="featured-img2"
              src="//cdn.shopify.com/s/files/1/1946/2989/files/suntime_grande.jpg?v=1542696389"
            />
          </Col>
          <Col xs="4">
            <img
              alt="#"
              className="featured-img2"
              src="//cdn.shopify.com/s/files/1/1946/2989/files/altantic_grande.jpg?v=1542696410"
            />
          </Col>
        </Row>
        <Row xs="3">
          <Col xs="3">
            <img
              alt="#"
              className="featured-img"
              src="//cdn.shopify.com/s/files/1/1946/2989/files/glow_grande.jpg?v=1542696422"
            />
          </Col>
          <Col xs="3">
            <img
              alt="#"
              className="featured-img"
              src="//cdn.shopify.com/s/files/1/1946/2989/files/allure_grande.jpg?v=1542696431"
            />
          </Col>
          <Col xs="3">
            <img
              alt="#"
              className="featured-img"
              src="//cdn.shopify.com/s/files/1/1946/2989/files/ninety_grande.jpg?v=1542696438"
            />
          </Col>
          <Col xs="3">
            <img
              alt="#"
              className="featured-img"
              src="//cdn.shopify.com/s/files/1/1946/2989/files/marie_grande.jpg?v=1542696447"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
