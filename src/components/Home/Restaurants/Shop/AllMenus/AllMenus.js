import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { BagHeart } from 'react-bootstrap-icons';
import LoadingSpinner from '../../../../Common/LoadingSpinner/LoadingSpinner';
import useCartData from '../../../../../Hooks/useCartData';
import axios from 'axios';

const AllMenus = () => {
    const [menusData, setMensuData] = useState([]);
    const location = useLocation();

    const { handleAddCart } = useCartData();

    const menuUrl = `${process.env.REACT_APP_URL}/menus`;
    useEffect(() => {
        axios.get(menuUrl)
            .then(resp => {
                if (location.pathname === '/') {
                    const serv = resp?.data.slice(0, 6);
                    setMensuData(serv)
                }
                else {
                    setMensuData(resp.data);
                }
            }
            );
    }, [menusData])
    return (
        <div className='my-2 containerHeight'>
            <Container>
                {!menusData?.shopName ? <Row xs={1} md={2} lg={3} className="g-4 mt-5">
                    {menusData?.map((item) => (
                        <Col key={item.itemName}>
                            <Card>
                                <Card.Img style={{ height: '350px' }} variant="top" src={item.imgurl} />
                                <Card.Body>
                                    <Card.Title ><span className='text-success fw-bold'>{item.itemName} </span> by: {item.shopName}</Card.Title>
                                    <Card.Text>{item.description}
                                    </Card.Text>
                                    <div className='d-flex justify-content-between'>
                                        <Button className='shadow btn-success text-white' onClick={() => { handleAddCart(item) }}>
                                            <BagHeart /> Add to cart
                                        </Button>
                                        <span className='p-2 mt-2 fs-4 rounded shadow fw-bold'>Price: <strong className='text-success'>{item.price}৳</strong></span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row> : <LoadingSpinner />
                }
            </Container>
        </div>
    );
};

export default AllMenus;