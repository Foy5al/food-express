import React from 'react';
import useCartData from '../../../../../Hooks/useCartData';
import { Trash, CartCheck } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const FoodCart = ({ setCartShow }) => {
    const { cart, setPrice } = useCartData();

    let total = 0;
    let price = 0;
    let shipping = 30;
    let subTotal = 0;
    let totalQuantity = 0;
    for (const product of cart) {

        if (!product.quantity) {
            product.quantity = 1;
        }
        price = Number(product.price) * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
        total = total + price;
        subTotal = total + shipping;
        setPrice(subTotal);
    }



    return (
        <div className='container '>
            {cart?.length ? <ol>
                {cart?.map((shops) => (
                    <li key={shops._id} className='m-2 d-flex justify-content-between shadow-sm p-2 rounded' >
                        <div>
                            <img className="rounded-circle z-depth-2 mx-2" alt="40x40 logo" style={{ width: "40px" }} src={shops.imgurl} />
                            {shops.itemName}
                        </div>
                        <div>
                            <span className='text-sm text-muted'>From:
                                <span className='text-secondary mx-2'>
                                    {shops.shopName}
                                </span>
                            </span>
                            <span>Qty: {shops.quantity}</span>
                        </div>
                        <div> Price: <span className='text-success'>{shops.price}
                        </span></div>
                        <div>
                            <button className='btn-danger rounded shadow'>
                                <Trash /> Remove
                            </button>
                        </div>
                    </li>))}
                <hr />
                <li className='m-2 d-flex justify-content-between shadow-sm p-2 rounded' >
                    <div className='text-success fw-bold'>
                        Total Food Price: {total}৳
                    </div>
                    <div>
                        <span className='text-sm text-muted'>
                            <span className='text-secondary mx-2'>
                                Delivery Charge: {shipping}৳
                            </span>
                        </span>

                    </div>
                    <div>
                        SubTotal:
                        <span className='text-success'> {subTotal}৳
                        </span></div>
                    <div>
                        <Link onClick={() => { setCartShow(false) }} to='/shipping'>
                            <button className='btn-info rounded shadow'>
                                <CartCheck /> Checkout
                            </button>
                        </Link>
                    </div>
                </li>
                <hr />
            </ol> : <div className='text-secondary'>Cart Is Empty Now</div>
            }

        </div>
    );
};

export default FoodCart;