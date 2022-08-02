import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [loadData, setLoadData] = useState([]);
    const [orderItem, setOrderItem] = useState([]);
    const url = `${process.env.REACT_APP_URL}/all/orders`;
    useEffect(() => {
        axios.get(url)
            .then(resp => setLoadData(resp.data));
    }, [loadData])

    useEffect(() => {
        const rest = loadData.filter(pd => pd.email === user.email);
        setOrderItem(rest);

    }, [loadData])
    return (
        <div className='my-2 containerHeight'>
            <Container>
                {orderItem?.length > 0 ?
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mail Address</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Price</th>
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
                    </Table> : <></>
                }
            </Container>
        </div>
    );
};

export default MyOrders;