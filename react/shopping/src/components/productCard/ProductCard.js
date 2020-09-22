import React ,{useEffect} from "react";
import { Row, Col } from "reactstrap";
import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareAlt,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function ProductCard({productName , productImage, productPrice, productReviews}) {
  

  return (



 
    <div className="card-box">
      <div id="vis">
        <Row id="shared-div">
          <div id="share-div">
            <FontAwesomeIcon icon={faShareAlt} />
          </div>
        </Row>
      </div>
      <Row>
        <img
          id="card-img"
          alt="s"
          src={productImage}
        ></img>
      </Row>
      <Row>
        <p id="name-tag" href="https://thepuffcuff.com/">
          {productName}
        </p>
      </Row>
      <Row>
        <div id="star-row">
          <div id="stars">
            <FontAwesomeIcon className="star-icon" icon={faStar} />
            <FontAwesomeIcon className="star-icon" icon={faStar} />
            <FontAwesomeIcon className="star-icon" icon={faStar} />
            <FontAwesomeIcon className="star-icon" icon={faStar} />{" "}
            <FontAwesomeIcon className="star-icon" icon={faStarHalfAlt} />
          </div>
  <div>{productReviews}</div>
        </div>
      </Row>
      <Row>
  <div id="star-row2">${productPrice}</div>
      </Row>

      <Row className="bot-div">
        <hr></hr>
        <hr></hr>
        <Col>add to bag</Col>
        <Col>quick look</Col>
      </Row>
    </div>
  );
}
