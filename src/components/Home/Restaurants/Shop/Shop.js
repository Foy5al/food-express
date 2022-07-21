import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { BagHeart } from 'react-bootstrap-icons';
import { useParams } from 'react-router-dom';

const Shop = () => {
    let { shopId } = useParams();

    const [shopDetails, setShopDetails] = useState([]);
    const url = `${process.env.REACT_APP_URL}/shop/${shopId}`;
    useEffect(() => {
        axios.get(url)
            .then(resp => setShopDetails(resp.data))
    }, [])

    // const shopDetails = cardData.find((shop) => shop.resid === parseInt(shopId));
    return (
        <div className='container'>
            {/* top card */}

            <div>
                <img style={{ height: "350px", width: '100%' }} src={shopDetails.imgLink} alt="shop fb cover" />
                <div className='d-flex p-2 justify-content-center'>
                    <img className="rounded-circle z-depth-2 mx-2" style={{ width: '100px' }} src={shopDetails.logo} alt="shop logo" />
                    <h1 className='text-center'>{shopDetails.resturent_name}</h1>
                </div>
            </div>

            {/* card contain shop menu */}

            <Row xs={1} md={2} lg={3} className="g-4 mt-5">
                {shopDetails?.menus?.map((item) => (
                    <Col key={item.itemName}>
                        <Card>
                            <Card.Img style={{ height: '350px' }} variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.itemName} </Card.Title>
                                <Card.Text>
                                    <span className='p-2 mt-2 fs-4 rounded shadow fw-bold'>Price: <strong className='text-success'>{item.price}৳</strong></span>
                                </Card.Text>
                                <Button>
                                    <BagHeart /> Add to cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Shop;