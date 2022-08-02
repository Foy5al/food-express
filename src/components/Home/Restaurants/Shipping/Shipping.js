import axios from 'axios';
import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import useAuth from '../../../../Hooks/useAuth';
import useCartData from '../../../../Hooks/useCartData';

const Shipping = () => {
    const { user } = useAuth();
    const { cart, price, setCart } = useCartData();
    const CoverageArea = [
        'Dhaka',
        'Keraniganj',
        'Gazipur',
        'Savar',
        'Chittagong',
        "Cox's Bazar",
        'Barisal',
    ]

    const handleDeliveryLocation = e => {
        e.preventDefault();
        const city = e.target.city.value;
        const mail = e.target.mailAddress.value;
        const tel = e.target.tel.value;
        const house = e.target.houseNo.value;
        const area = e.target.area.value;
        const zip = e.target.zipCode.value;

        let data = {
            email: `${mail}`,
            city: `${city}`,
            tel: tel,
            house: `${house}`,
            area: `${area}`,
            zip: zip,
            orderItems: cart,
            price: price
        }
        const url = `${process.env.REACT_APP_URL}/orders`;
        axios.post(url, data)
            .then(resp => {
                if (resp.data.insertedId) {
                    alert('Order Place successfully');
                    e.target.reset();
                }
            })
        setCart([]);

    }
    return (
        <div className='container p-2'>
            <Form onSubmit={handleDeliveryLocation}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <Form.Select aria-label="Default select example" name={'city'} required>
                        <option>Select Your City</option>
                        {
                            CoverageArea.map(area => <option key={area} value={area}>{area}</option>)
                        }
                    </Form.Select>
                    <Form.Label>Mail Address</Form.Label>
                    <Form.Control
                        name={'mailAddress'}
                        type="email"
                        placeholder="foodlover@hotmail.com"
                        autoFocus
                        required
                        defaultValue={user.email}
                    />
                    <Form.Label>Mobile No</Form.Label>
                    <Form.Control
                        name={'tel'}
                        type="tel"
                        placeholder="Ex. 01680000008"
                        autoFocus
                        required
                    />
                    <Form.Label>House No / Apt No</Form.Label>
                    <Form.Control
                        name={'houseNo'}
                        type="text"
                        placeholder="Ex. House 15 / Apt 4A"
                        autoFocus
                        required
                    />
                    <Form.Label>Road No and Area</Form.Label>
                    <Form.Control
                        name={'area'}
                        type="text"
                        placeholder="Ex. 22/A, Tejgaon"
                        autoFocus
                        required
                    />
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control
                        name={'zipCode'}
                        type="number"
                        placeholder="Ex. 1208"
                        autoFocus
                        required
                    />


                </Form.Group>
                <button type='submit' className='btn-success rounded shadow'> Confirm Order</button>
            </Form>
        </div>
    );
};

export default Shipping;