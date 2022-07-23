import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../../Common/LoadingSpinner/LoadingSpinner';
import './Shop.css';

const Shops = () => {
    const [cardData, setCardData] = useState([]);
    const url = `${process.env.REACT_APP_URL}/shops`;
    useEffect(() => {
        axios.get(url)
            .then(resp => setCardData(resp.data));
    })

    console.log(cardData[0]?.resturent_name);
    return (
        <div>
            {!cardData[0]?.resturent_name ? <LoadingSpinner /> : <Row xs={1} md={2} lg={3} className="g-4">
                {cardData.map((shops) => (
                    <Col key={shops._id}>
                        <Card>
                            <Card.Img style={{ height: '150px' }} variant="top" src={shops.imgLink} />
                            <Card.Body>
                                <Card.Title> <Card.Img className="rounded-circle z-depth-2 mx-2" alt="40x40 logo" style={{ width: "40px" }} variant="top" src={shops.logo} />{shops.resturent_name}</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between">
                                <Button>
                                    <Link className='text-decoration-none text-white' to={`/shop/${shops._id}`}>Order Now</Link>
                                </Button>
                                <p>Rating: {shops.rating}</p>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>}
        </div >
    );
};

export default Shops;