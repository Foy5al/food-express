import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Trash, CardText } from 'react-bootstrap-icons';
import { Link, useLocation } from 'react-router-dom';
import './MangeShops.css'

const ManageShops = () => {
    const [isAddShop, setIsAddShop] = useState(true)
    const [cardData, setCardData] = useState([]);
    const location = useLocation();

    const handleDeleteBtn = id => {
        axios.delete(`${process.env.REACT_APP_URL}/deleteshop/${id}`)
            .then(resp => {
                if (resp.data.deletedCount === 1) {
                    alert('Item is delete successfully')
                    const remaining = cardData.filter(service => service._id !== id);
                    setCardData(remaining);
                }
            });
    }

    //this is used for conditional rendering of update btn
    useEffect(() => {
        if (location.pathname === '/add/shop') {
            setIsAddShop(false)
        }
        else {
            setIsAddShop(true);
        }
    }, [])

    const url = `${process.env.REACT_APP_URL}/shops`;
    useEffect(() => {
        axios.get(url)
            .then(resp => setCardData(resp.data))
    }, [cardData])




    return (
        <div className='container containerHeight'>
            <ol>
                <img src="" alt="" />
                {cardData.map((shops) => (
                    <li key={shops.resturent_name} className='m-2 d-flex justify-content-between shadow-sm p-2 rounded' >
                        <div>
                            <img className="rounded-circle z-depth-2 mx-2" alt="40x40 logo" style={{ width: "40px" }} src={shops.logo} />
                            {shops.resturent_name}
                        </div>
                        <div>
                            {isAddShop ? <Link to={`/add/menu/${shops.resturent_name}`}><Button variant='info mx-2 shadow'>
                                <CardText /> Update Menu
                            </Button></Link> : <></>}

                            <Button onClick={() => { handleDeleteBtn(shops.resturent_name) }} variant='danger shadow'>
                                <Trash /> Delete
                            </Button>
                        </div>
                    </li>))}

            </ol>

        </div>
    );
};

export default ManageShops;