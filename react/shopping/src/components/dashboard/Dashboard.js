import React from "react";
import {Row, Col } from "reactstrap";
import VideoPlayer from "../videoPlayer/VideoPlayer";
import Featured from "../featured/Featured";
import "./Dashboard.css";
import OrderTag from "../orderTag/OrderTag";
import OrderTag2 from "../orderTag2/OrderTag2";

import BestSellers from "../bestSellers/BestSellers";
import AvaibleAt from "../avaibleAt/AvaibleAt";
import CarouselUsage from "../carousel/CarouselUsage";
import Offers from "../offers/Offers";
import OrderTag3 from "../orderTag3/OrderTag3";
import Deneme from '../Deneme'

export default function Dashboard() {
  return (
    <div id="dashboard-main-div">
     
        <Row>
          <VideoPlayer></VideoPlayer>
        </Row>
        <Row>
          <Col>
            <Featured></Featured>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <OrderTag></OrderTag>
          </Col>
        </Row>
        <Row>
          <Col>
            <BestSellers></BestSellers>
          </Col>
        </Row>

        <Row>
          <Col>
            <br></br>
            <OrderTag2></OrderTag2>
          </Col>
        </Row>

        <Row>
          <Col>
            <br></br>
            <AvaibleAt></AvaibleAt>
          </Col>
        </Row>

        <Row>
          <Col>
            <br></br>
            <CarouselUsage></CarouselUsage>
          </Col>
        </Row>
        <Row>
          <Col>
            <br></br>
            <OrderTag2></OrderTag2>
          </Col>
        </Row>
        <Row>
          <Col>
            <br></br>
            <Offers></Offers>
          </Col>
        </Row>

        <Row>
          <Col>
            <br></br>
            <OrderTag3></OrderTag3>
          </Col>
        </Row>
       
        <Row>
          <Col>
            <Deneme></Deneme>
          </Col>
        </Row>
      
    </div>
  );
}
