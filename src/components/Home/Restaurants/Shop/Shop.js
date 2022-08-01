import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { BagHeart } from 'react-bootstrap-icons';
import { useParams } from 'react-router-dom';
import useCartData from '../../../../Hooks/useCartData';
import useShopData from '../../../../Hooks/useShopData';
import { addToDb, getStoredCart } from '../../../../utilities/LocalData';
import LoadingSpinner from '../../../Common/LoadingSpinner/LoadingSpinner';
import FoodCart from './FoodCart/FoodCart';

const Shop = () => {

    let { shopName } = useParams();
    const [shopInfo, setShopInfo] = useState([]);
    const [shopMenuInfo, setshopMenuInfo] = useState([]);

    const { handleAddCart, cart } = useCartData();
    console.log(cart);

    const shopdata = useShopData(shopName);
    /* const url = `${process.env.REACT_APP_URL}/shop/${shopId}`;
    useEffect(() => {
        axios.get(url)
            .then(resp => setshopMenuInfo(resp.data))
    }, []) */

    useEffect(() => {
        if (shopdata.resturent_name !== undefined) {
            setShopInfo(shopdata);
            axios.get(`${process.env.REACT_APP_URL}/shop/menu/${shopdata.resturent_name}`)
                .then(resp => setshopMenuInfo(resp.data))
        }

    }, [shopdata])

    /* //shopping card function
    useEffect(() => {
        const savedCart = getStoredCart();
        const keys = Object.keys(savedCart);
        const url = `${process.env.REACT_APP_URL}/foods/usekeys`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(addProducts => {
                if (addProducts.length) {
                    const storedProduct = []; // ekta empty array create kora hoise karon state e direct push kora jabe na tai amra new ekta create kore nichi jata push kora jay

                    for (const key in savedCart) {
                        //console.log(savedCart[key]); // check the product quantity
                        const addedProducts = addProducts.find(products => products.key === key);
                        if (addedProducts) {
                            const quantity = savedCart[key]; //ekhane product jegula add hoise tader quantity ke store kora holo
                            addedProducts.quantity = quantity; // ekhane added product er majhe ekta property add kora holo 
                            // console.log(addedProducts);
                            storedProduct.push(addedProducts); //find result er data ke array er vitore push kore deya hoise
                        }

                    }
                    setCart(storedProduct);
                }
            })

    }, []) */



    /* const handleAddCart = product => {
        console.log(product._id)
        let newCart = [];
        const exist = cart.find(pd => pd._id === product._id);
        if (exist) {
            const rest = cart.filter(pd => pd._id !== product._id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, product]

        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        console.log(newCart);
        setCart(newCart);
        addToDb(product._id)
    } */


    // const shopMenuInfo = cardData.find((shop) => shop.resid === parseInt(shopId));
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
            <Row xs={1} md={2} lg={3} className="g-4 mt-5">
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
            </Row>

        </div>
    );
};

export default Shop;