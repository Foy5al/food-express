import React from 'react';
import { ButtonGroup, NavLink, Nav } from 'react-bootstrap';
import Shops from './Shops/Shops';

const Resturents = () => {
    return (
        <div>

            <h6 className='mx-2'>20 Outlets Nearby</h6>

            <hr className="text-danger border-2 opacity-50" />
            <Nav variant="pills" className="me-auto" defaultActiveKey="#restaurant">
                <Nav.Item>
                    <Nav.Link href="#restaurant">Restaurant</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="#homefood">Home Food</Nav.Link>
                </Nav.Item>
            </Nav>
            <hr className="text-danger border-2 opacity-50" />

            <Shops />
        </div>
    );
};

export default Resturents;