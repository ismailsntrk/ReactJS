import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row } from "reactstrap";
import "./CarouselSection.css";
import ReactPlayer from "react-player";


class CarouselSection extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        <div className="container">
          <Slider {...settings}>
            <div>
            <Row xs='3'>
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
                <Col>
                  <img
                    className="static-img"
                    src="//cdn.shopify.com/s/files/1/1946/2989/files/video_img_1.png?v=1542708807"
                  />
                </Col>
                <Col>
                  <br></br>
                  The PuffCuff Hair clamp was developed from a simple idea:
                  Create a tool that not only makes it easy to achieve stylish
                  looks without stressing your hair or causing pain but one that
                  is sanitary, durable and affordable too. So, what does that
                  look like? The models you see here are all everyday people
                  with various hair types wearing the PuffCuff. What makes us
                  different? <br></br>
                  <br></br>
                  Let’s face it. Most accessories are for straight hair. And,
                  unlike curly hair, straight hair only comes in one type:
                  straight. After years of searching for an accessory to
                  accommodate thick, textured hair, we created the PuffCuff. It
                  works with a variety of hair types from 2C to 4C, whether
                  curly, texture or wavy. Our PuffCuff allows you to create many
                  beautiful hairstyles without cinching your hair to the
                  smallest point of resistance or damaging it. <br></br>
                  <br></br>
                  Sound special? It is. You won’t find PuffCuff at your local
                  big box store. This one-of-a-kind clamp is only available
                  online. And YES, we offer international shipping for a rate of
                  $5.99 USD for all orders totaling over $50 USD.
                  <br></br>
                  <br></br>
                </Col>
              </Row>
            </div>
            <div>
            <Row xs='3'>
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
                <Col>
                  <ReactPlayer
                    
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    controls={true}
                  />
                </Col>
                <Col>
                  <br></br>
                  TO USE: If you have very thick hair, you may want to dampen
                  your hair with water or your favorite hair product. Start by
                  gathering your hair as if creating a ponytail. While holding
                  your hair with one hand, INSERT (we stress INSERT) the teeth
                  of one arm of the PuffCuff into your hair at the base of your
                  puff, as close to the scalp as possible. While still holding
                  gathered hair, use your free hand to insert teeth of the
                  opposite arm into the hair on the opposite side of your head.
                  It's important NOT to let go of your gathered hair yet. Once
                  both arms are inserted into the hair at the base of puff, push
                  arms together overlapping the hooks. Gently pull arms in
                  opposite direction to interlock hooks and close the clamp. Now
                  let go of gathered hair!
                  <br></br>
                  <br></br>
                </Col>
              </Row>
            </div>
            
            <div>
            <Row xs='3'>
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
              
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
            <Row xs='3'>
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
              <img src="http://placekitten.com/g/400/200" />
            </div>
           
          </Slider>
        </div>
      </Slider>
    );
  }
}

export default CarouselSection;
