import React  from 'react'
import {Row, Col} from 'reactstrap'
import ProductCard from '../productCard/ProductCard'

export default function Offers() {
    return (
        
        <div>
            <div className="best-seller-box">
        <Row xs='3'>
          <Col>
            <div className="title-row2">
              <hr id="line-thing" />
            </div>
          </Col>
          <Col xs="4">
            <div className="title-row">
              <h3>SOME OF THE ADDITIONAL TOOLS WE OFFER</h3>
            </div>
          </Col>
          <Col xs="4">
            <div className="title-row2">
              <hr id="line-thing" />
            </div>
          </Col>
        </Row>
        <Row>
           
            <Col>
            <div className="card-item">
            <ProductCard></ProductCard>
            </div>
            </Col>
        </Row>
       
      </div>
        </div>
    )
}
