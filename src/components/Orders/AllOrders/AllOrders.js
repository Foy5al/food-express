import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const AllOrders = () => {
    const [orderItem, setOrderItem] = useState([]);
    const url = `${process.env.REACT_APP_URL}/all/orders`;
    useEffect(() => {
        axios.get(url)
            .then(resp => setOrderItem(resp.data));
    }, [orderItem])

    const handleOrderDelete = id => {
        axios.delete(`${process.env.REACT_APP_URL}/delete/order/${id}`)
            .then(resp => {
                if (resp.data.deletedCount === 1) {
                    alert('order is delete successfully')
                    const remaining = orderItem.filter(service => service._id !== id);
                    setOrderItem(remaining);
                }
            });
    }

    return (
        <div className='my-2 containerHeight'>
            <Container>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Mail Address</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        orderItem?.map((order) => (
                            <tbody>
                                <tr>
                                    <td>▶</td>
                                    <td>{order.email}</td>
                                    <td>{order.house},{order.area},{order.city}</td>
                                    <td>{order.tel}</td>
                                    <td>{order.price}</td>
                                    <td>
                                        {/* <Button variant="secondary">Details</Button> 
                                        <div className="vr mx-2" />*/}
                                        <Button onClick={() => { handleOrderDelete(order._id) }} variant="outline-danger">Delete</Button></td>
                                </tr>
                                <tr>
                                    {order?.orderItems?.map((item) =>
                                    (<div style={{ width: '100%' }} className='d-flex flex-wrap justify-content-between '>
                                        <img style={{ width: '40px' }} src={item.imgurl} alt={item.itemName} />
                                        <span>Item Name: {item.itemName}</span>
                                        <span>Quantity: {item.quantity}</span>
                                        <span>Price: {item.price}</span>
                                    </div>))}
                                </tr>
                            </tbody>
                        ))
                    }
                </Table>
            </Container>
        </div>
    );
};

export default AllOrders;