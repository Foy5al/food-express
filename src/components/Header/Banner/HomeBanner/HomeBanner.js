import React from "react";
import Carousel from "react-bootstrap/Carousel";

const HomeBanner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            height={"400px"}
            className="d-block w-100"
            src="https://dev.zoodigital.ie/burgerking/wp-content/uploads/2015/12/KingDeals-Banner_1800x760.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            height={"400px"}
            className="d-block w-100"
            src="https://i.pinimg.com/originals/f3/dc/7d/f3dc7d50d75c9706b2db39283a1dc3cb.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            height={"400px"}
            className="d-block w-100"
            src="https://static.hungrynaki.com/hungrynaki-v4/restaurants/sultan_s_dine/meta/sultan_s_dine_cover_1637777166342.jpeg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeBanner;
