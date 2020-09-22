import React, { useState } from "react";
import { Container, Row, Col, Popover, PopoverBody } from "reactstrap";
import "./Navi.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faBriefcase,
  faMapSigns,
} from "@fortawesome/free-solid-svg-icons";
import TextField from "@material-ui/core/TextField";
import {Link} from 'react-router-dom'
import { Button } from "@material-ui/core";

export default function Navi() {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);
  return (
    <div>
      <Container id="mine">
        <Row xs="1" className="header-top">
          <p id="header-top-p">JOIN OUR NEW REWARDS PROGRAM TODAY!</p>
        </Row>

        <Row xs="11" className="header-bot">
          <Col xs="5">
            <ul id="nav-link-box">
              <li>
                <a
                  href="https://www.w3schools.com/tags/tag_hr.asp"
                  className="nav-links"
                >
                  LAAYED
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3schools.com/tags/tag_hr.asp"
                  className="nav-links"
                >
                  SETS&KITS
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3schools.com/tags/tag_hr.asp"
                  className="nav-links"
                >
                  SHOP ALL
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3schools.com/tags/tag_hr.asp"
                  className="nav-links"
                >
                  WHAT SIZE DO I NEED
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3schools.com/tags/tag_hr.asp"
                  className="nav-links"
                >
                  <FontAwesomeIcon id="map-sign" icon={faMapSigns} />
                   FIND A STORE
                </a>
              </li>
            </ul>
          </Col>
          <Col xs="2">
            <Link to={'/'}>
              <img
                className="normal-logo"
                src="//cdn.shopify.com/s/files/1/1946/2989/t/13/assets/logo.png?v=10127676747873204896"
                alt="ThePuffCuff"
              ></img>
            </Link>
          </Col>
          <Col xs="5">
            <Row>
              <Col xs="8">
                <div className="buscar-caja">
                  <input
                    type="text"
                    name=""
                    className="buscar-txt"
                    placeholder="How Can I Help You ?"
                  />
                  <a
                    href="https://www.w3schools.com/tags/tag_hr.asp"
                    className="buscar-btn"
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </a>
                </div>
              </Col>

              <Col xs="2" id="nav-row">
                <a
                  
                  id="Popover1"
                  type="button"
                >
                  <FontAwesomeIcon icon={faUser} />
                  SIGN IN
                </a>

                <Popover
                  placement="bottom"
                  isOpen={popoverOpen}
                  target="Popover1"
                  toggle={toggle}
                >
                  <PopoverBody>
                    <TextField
                      required
                      id="standard-required"
                      label="Required"
                      defaultValue="Hello World"
                    />
                     <Link to={'/signin'}>
                    <Button>Sign In</Button>
                    </Link>
                    <Link to={'/signup'}>
                    <Button>Sign Up</Button>
                    </Link>
                    
                  </PopoverBody>
                </Popover>
              </Col>

              <Col xs="2">
                <Col xs="4" id="nav-card">
                  <a href="https://www.w3schools.com/tags/tag_hr.asp">
                    <FontAwesomeIcon id="brief-icon" icon={faBriefcase} />
                  </a>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
