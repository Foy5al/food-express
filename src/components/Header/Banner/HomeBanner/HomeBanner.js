import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HomeBanner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img height={'400px'}
                        className="d-block w-100"
                        src="http://kingsbiryanii.com/assets/images/portfolio/extended/Kings-biryanii-banner-3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img height={'400px'}
                        className="d-block w-100"
                        src="https://dev.zoodigital.ie/burgerking/wp-content/uploads/2015/12/KingDeals-Banner_1800x760.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img height={'400px'}
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/f3/dc/7d/f3dc7d50d75c9706b2db39283a1dc3cb.jpg"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img height={'400px'}
                        className="d-block w-100"
                        src="https://admin.sajilomeals.com/public/uploads/shares/sliders/sajilomeals-banner.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default HomeBanner;