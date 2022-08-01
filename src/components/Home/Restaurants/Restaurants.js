import React from 'react';
import { Nav } from 'react-bootstrap';
import Shops from './Shops/Shops';

const Resturents = () => {
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

            <Shops />
        </div>
    );
};

export default Resturents;