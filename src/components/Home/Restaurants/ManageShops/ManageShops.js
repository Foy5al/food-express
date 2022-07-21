import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Trash, CardText } from 'react-bootstrap-icons';

const ManageShops = () => {
    const [cardData, setCardData] = useState([]);
    const url = `${process.env.REACT_APP_URL}/shops`;
    useEffect(() => {
        axios.get(url)
            .then(resp => setCardData(resp.data))
    }, [])

    const handleDeleteBtn = id => {
        console.log(id);
        axios.delete(`${process.env.REACT_APP_URL}/deleteshop/${id}`)
            .then(resp => {
                console.log(resp);
                if (resp.data.deletedCount === 1) {
                    alert('Item is delete successfully')
                    const remaining = cardData.filter(service => service._id !== id);
                    setCardData(remaining);
                }
            });
    }
    return (
        <div className='container'>
            <ol>
                <img src="" alt="" />
                {cardData.map((shops) => (
                    <li key={shops.resturent_name} className='m-2 d-flex justify-content-between shadow-sm p-2 rounded' >
                        <div>
                            <img className="rounded-circle z-depth-2 mx-2" alt="40x40 logo" style={{ width: "40px" }} src={shops.logo} />
                            {shops.resturent_name}
                        </div>
                        <div>
                            <Button variant='info mx-2 shadow'>
                                <CardText /> Edit
                            </Button>
                            <Button onClick={() => { handleDeleteBtn(shops._id) }} variant='danger shadow'>
                                <Trash /> Delete
                            </Button>
                        </div>
                    </li>))}

            </ol>

        </div>
    );
};

export default ManageShops;