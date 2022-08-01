import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../utilities/LocalData';

const useCart = () => {
    const [test, setTest] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(cart)
    const handleAddCart = product => {
        console.log(product._id, 'this is from usecart')
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
        // console.log(newCart);
        setTest(newCart);
        setCart(newCart);
        addToDb(product._id)
    }
    console.log(test, 'data is set in state');
    //shopping card function
    useEffect(() => {
        const savedCart = getStoredCart();
        const keys = Object.keys(savedCart);
        const url = `${process.env.REACT_APP_URL}/foods/ids`
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

    }, [])
    return {
        cart,
        setCart,
        handleAddCart,
        test
    };
};

export default useCart;