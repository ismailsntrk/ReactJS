import { Container } from '@material-ui/core'
import React from 'react'
import {Row, Col} from 'reactstrap'
import './AvaibleAt.css'

export default function AvaibleAt() {
    return (
        <Container>
          <div>
          <Row xs='3'>
          <Col>
            <div className="title-row2">
              <hr id="line-thing" />
            </div>
          </Col>
          <Col xs="4">
            <div className="title-row">
              <h2>SHOP OUR BEST SELLERS</h2>
            </div>
          </Col>
          <Col xs="4">
            <div className="title-row2">
              <hr id="line-thing" />
            </div>
          </Col>
        </Row>
        <br>
        </br>
        <div id="sally">
        <img className="static-img" src="//cdn.shopify.com/s/files/1/1946/2989/files/SALLYBEAUTY.jpg?v=1542706954" />
        </div>
        </div>
        </Container>
    )
}
