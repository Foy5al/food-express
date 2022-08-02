import { useState } from 'react';

const useCart = () => {
    const [price, setPrice] = useState(0);
    const [cart, setCart] = useState([]);

    const handleAddCart = product => {
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
        setCart(newCart);
    }
    return {
        cart,
        setCart,
        handleAddCart,
        setPrice,
        price
    };
};

export default useCart;