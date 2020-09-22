import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Container, Row, Col } from "reactstrap";
import { Button } from "@material-ui/core";

export default function SignUp() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value)
 }

  return (
      
    <div>
      <Container>
        <Col>
          <Row>
          <input type="text"  onChange={handleChange} /> 
          </Row>
          <Row>
            <TextField required id="standard-required" label="Email Required" />
          </Row>
          <Row>
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </Row>

          <Row>
  <Button type="Submit">{name }</Button>
          </Row>
        </Col>
      </Container>
    </div>
  );
}
