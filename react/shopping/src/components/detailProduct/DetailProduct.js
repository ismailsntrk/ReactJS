import React, { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { useSelector } from "react-redux";
import db from "../../firebase/firebase";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

export default function DetailProduct() {
  const { productId } = useParams();
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const [reviews, setReviews] = useState(0);

  useEffect(() => {
    if (productId) {
      db.collection("products")
        .doc(productId)
        .onSnapshot((snapshot) => {
          setName(snapshot.data().name);
          setImageUrl(snapshot.data().imageUrl);
          setPrice(snapshot.data().price);
          setReviews(snapshot.data().reviews);
        });
    }
  }, [productId]);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: false,
                  width: 400,
                  height: 500,
                  src: imageUrl,
                },
                largeImage: {
                  src: imageUrl,
                  width: 1200,
                  height: 1800,
                },
              }}
            />
          </Col>
          <Col>
            <Row>
              <h1>{name}</h1>
            </Row>
            <Row>
              <h3>{reviews}</h3>
            </Row>
            <Row>
              <h3>{name}</h3>
            </Row>
            <Row>
              <h2>{price} </h2>
            </Row>
            <Row>
              <h4>asdasdas asdasd asdasd</h4>
            </Row>
            <Row></Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
