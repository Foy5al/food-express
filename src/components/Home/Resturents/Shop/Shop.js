import React from 'react';
import { useParams } from 'react-router-dom';

const Shop = () => {
    let { shopId } = useParams();
    return (
        <div>
            This is shop page {shopId}
        </div>
    );
};

export default Shop;