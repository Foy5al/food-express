import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AllMenus from './Shop/AllMenus/AllMenus';
import Shops from './Shops/Shops';

const Resturents = () => {
    const [cardData, setCardData] = useState([]);
    const url = `${process.env.REACT_APP_URL}/shops`;
    useEffect(() => {
        axios.get(url)
            .then(resp => setCardData(resp.data));
    }, [cardData])



    return (
        <div>

            <h6 className='mx-2'>10 Outlets Nearby</h6>

            <hr className="text-danger border-2 opacity-50" />
            <Nav variant="pills" className="me-auto" defaultActiveKey="#restaurant">
                <Nav.Item>
                    <Nav.Link href="#restaurant">Restaurant</Nav.Link>
                </Nav.Item>
            </Nav>
            <hr className="text-danger border-2 opacity-50" />

            <Shops cardData={cardData} card />

            <hr className="text-danger border-2 opacity-50" />
            <h6 className='mx-2'>Popular foods </h6>
            <hr className="text-danger border-2 opacity-50" />
            <AllMenus />
            <div className='d-flex justify-content-end'>
                <Link className='mt-4 shadow text-white p-2 bg-success rounded' to='/menus'>See All Menus</Link>
            </div>
        </div>
    );
};

export default Resturents;