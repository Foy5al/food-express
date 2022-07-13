import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HomeBanner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://static.hungrynaki.com/hungrynaki-v4/home-banner/bkash_june_home_banner_web_home_banner_1656310953576.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://static.hungrynaki.com/hungrynaki-v4/home-banner/dhaka__bank_home_banner_web_home_banner_1655987225133.png"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static.hungrynaki.com/hungrynaki-v4/home-banner/bkash_june_home_banner_web_home_banner_1656310953576.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        {/*  <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeBanner;