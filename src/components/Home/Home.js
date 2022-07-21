import React from 'react';
import DealBanner from '../Header/Banner/DealBanner/DealBanner';
import HomeBanner from '../Header/Banner/HomeBanner/HomeBanner';
import Restaurants from './Restaurants/Restaurants';

const Home = () => {
    return (
        <div className='container'>
            <HomeBanner />
            <DealBanner />
            <Restaurants />
        </div>
    );
};

export default Home;