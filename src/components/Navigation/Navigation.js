import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PinMapFill } from 'react-bootstrap-icons';
import { PersonBadge } from 'react-bootstrap-icons';
import { Link, NavLink } from 'react-router-dom';
import { useRef } from 'react';
import useAuth from '../../Hooks/useAuth';

const Navigation = () => {
    const { user } = useAuth();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const loc = useRef();
    const [locationData, setLocationData] = useState('22/A,Tejgaon Dhaka');
    const handleClickEvent = () => {
        const form = loc.current;
        const address = `${form['area'].value} ${form['city'].value} - ${form['zipCode'].value}`;
        setLocationData(address);
        handleClose();
    }

    const CoverageArea = [
        'Dhaka',
        'Keraniganj',
        'Gazipur',
        'Savar',
        'Chittagong',
        "Cox's Bazar",
        'Barisal',
    ]


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link className='text-success text-decoration-none' to='/'>Foodies Express</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
                            <Button variant="primary" onClick={handleShow}>
                                <PinMapFill />{locationData}
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Set Delivery Location</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form ref={loc}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Select aria-label="Default select example" name={'city'}>
                                                <option>Select Your City</option>
                                                {
                                                    CoverageArea.map(area => <option key={area} value={area}>{area}</option>)
                                                }
                                            </Form.Select>
                                            <Form.Label>House No / Apt No</Form.Label>
                                            <Form.Control
                                                name={''}
                                                type="text"
                                                placeholder="Ex. House 15 / Apt 4A"
                                                autoFocus
                                            />
                                            <Form.Label>Road No and Area</Form.Label>
                                            <Form.Control
                                                name={'area'}
                                                type="text"
                                                placeholder="Ex. 22/A, Tejgaon"
                                                autoFocus
                                            />
                                            <Form.Label>Zip Code</Form.Label>
                                            <Form.Control
                                                name={'zipCode'}
                                                type="text"
                                                placeholder="Ex. 1208"
                                                autoFocus
                                            />

                                        </Form.Group>

                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button onClick={handleClickEvent} variant="primary">
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                        </Nav>

                        <Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                            {
                                !user?.email ? <Button variant="success ms-2">
                                    <NavLink className="text-decoration-none text-white " to="/login"><PersonBadge /> Login</NavLink>
                                </Button> : <span className='ms-1'>
                                    <img style={{ width: "40px" }} class="rounded-circle z-depth-2" alt="Img" src={user.photoURL}
                                        data-holder-rendered="true" /><Link className='text-white text-center ms-1' to='/login'>{user.displayName}</Link></span>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;