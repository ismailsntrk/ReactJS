import React from "react";
import CarouselSection from "./CarouselSection";
import { Row, Col } from "reactstrap";
import "./CarouselUsage.css";
import { Container } from "@material-ui/core";

export default function CarouselUsage() {
  return (
    <div>
      <div className="carousel-box">
        <CarouselSection></CarouselSection>
      </div>
    </div>
  );
}
