import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../../Common/LoadingSpinner/LoadingSpinner';
import './Shop.css';
import { ArrowRightCircleFill, StarFill } from 'react-bootstrap-icons';

const Shops = (props) => {

    const cartData = props?.cardData;


    return (
        <div>
            {cartData[0]?.resturent_name ? <Row xs={1} md={2} lg={3} className="g-4">
                {cartData.map((shops) => (
                    <Col key={shops._id}>
                        <Card>
                            <Card.Img style={{ height: '150px' }} variant="top" src={shops.imgLink} />
                            <Card.Body>
                                <Card.Title> <Card.Img className="rounded-circle z-depth-2 mx-2" alt="40x40 logo" style={{ width: "40px" }} variant="top" src={shops.logo} />{shops.resturent_name}</Card.Title>
                                <Card.Text>
                                    Hope your'e hungry! Please order your desire foods by clicking into the order now btn 😊
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between">
                                <Button variant='success'>
                                    <Link className='text-decoration-none text-white' to={`/shop/${shops.resturent_name}`}>Order Now <ArrowRightCircleFill /></Link>
                                </Button>
                                <p>Rating: {shops.rating} <StarFill /></p>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row> : <LoadingSpinner />}
        </div >
    );
};

export default Shops;