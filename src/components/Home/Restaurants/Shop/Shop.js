import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { BagHeart } from 'react-bootstrap-icons';
import { useParams } from 'react-router-dom';
import useCartData from '../../../../Hooks/useCartData';
import useShopData from '../../../../Hooks/useShopData';
import LoadingSpinner from '../../../Common/LoadingSpinner/LoadingSpinner';

const Shop = () => {

    let { shopName } = useParams();
    const [shopInfo, setShopInfo] = useState([]);
    const [shopMenuInfo, setshopMenuInfo] = useState([]);

    const { handleAddCart } = useCartData();

    const shopdata = useShopData(shopName);

    useEffect(() => {
        if (shopdata.resturent_name !== undefined) {
            setShopInfo(shopdata);
            axios.get(`${process.env.REACT_APP_URL}/shop/menu/${shopdata.resturent_name}`)
                .then(resp => setshopMenuInfo(resp.data))
        }

    }, [shopdata])
    return (
        <div className='container'>
            {/* top card */}
            <div>
                <img style={{ height: "350px", width: '100%' }} src={shopInfo?.imgLink} alt="shop fb cover" />
                <div className='d-flex p-2 justify-content-center'>
                    <img className="rounded-circle z-depth-2 mx-2" style={{ width: '100px' }} src={shopInfo?.logo} alt="shop logo" />
                    <h1 className='text-center'>{shopInfo?.resturent_name}</h1>
                </div>
            </div>


            {/* card contain shop menu */}
            {!shopMenuInfo?.resturent_name ? <Row xs={1} md={2} lg={3} className="g-4 mt-5">
                {shopMenuInfo?.map((item) => (
                    <Col key={item.itemName}>
                        <Card>
                            <Card.Img style={{ height: '350px' }} variant="top" src={item.imgurl} />
                            <Card.Body>
                                <Card.Title className='text-success fw-bold'>{item.itemName} </Card.Title>
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


        </div>
    );
};

export default Shop;