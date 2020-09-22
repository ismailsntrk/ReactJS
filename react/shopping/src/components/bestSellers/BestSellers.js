import React, { useEffect, useState } from "react";
import "./BestSellers.css";
import { Row, Col } from "reactstrap";
import ProductCard from "../productCard/ProductCard";
import db from "../../firebase/firebase";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function BestSellers() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const postCurrentProduct = (productId) => {
    dispatch({ type: "POST_CURRENT_PRODUCT_ID", payload: productId });
  };

  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) =>
        setProducts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
      )
    );
  }, []);

  return (
    <div>
      <div className="best-seller-box">
        <Row xs="3">
          <Col>
            <div className="title-row2">
              <hr id="line-thing" />
            </div>
          </Col>
          <Col xs="4">
            <div className="title-row">
              <h3>SHOP OUR BEST SELLERS</h3>
            </div>
          </Col>
          <Col xs="4">
            <div className="title-row2">
              <hr id="line-thing" />
            </div>
          </Col>
        </Row>
        <Row>
          {products.map((product) => (
            <Link key={product.id} to={"/productDetail"  + product.id}>
              <Col>
                <div
                  onClick={() => postCurrentProduct(product.id)}
                  className="card-item"
                >
                  <ProductCard
                    productName={product.data.name}
                    productImage={product.data.imageUrl}
                    productPrice={product.data.price}
                    productReviews={product.data.reviews}
                  ></ProductCard>
                </div>
              </Col>
            </Link>
          ))}
        </Row>
      </div>
    </div>
  );
}
