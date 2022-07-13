import React from 'react';
import DealBanner from '../Header/Banner/DealBanner/DealBanner';
import HomeBanner from '../Header/Banner/HomeBanner/HomeBanner';
import Resturents from './Resturents/Resturents';

const Home = () => {
    return (
        <div className='container'>
            <HomeBanner />
            <DealBanner />
            <Resturents />
        </div>
    );
};

export default Home;