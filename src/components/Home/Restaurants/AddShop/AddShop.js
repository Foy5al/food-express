import axios from 'axios';
import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { Row } from 'react-bootstrap';
import ManageShops from '../ManageShops/ManageShops';
import { Shop } from 'react-bootstrap-icons';

const AddShop = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const url = `${process.env.REACT_APP_URL}/add/shop`;
        axios.post(url, data)
            .then(resp => {
                if (resp.data.insertedId) {
                    alert('Added data successfully');
                    reset({
                        resturent_name: '',
                        logo: '',
                        imgLink: '',
                        time: '',
                        rating: ''

                    })
                }
            })
    }

    return (
        <div className='container containerHeight'>
            <Row xs={1} md={2} lg={2} className="g-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className='text-center shadow p-2 rounded my-2'>Add A New Shop</h3>
                    <div className="mb-3">
                        <label>Shop Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            {...register("resturent_name")}
                            placeholder="Item Name" />
                    </div>
                    <div className="mb-3">
                        <label>Shop logo link</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            {...register("logo")}
                            placeholder="Shop logo link"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Cover img Link</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            {...register("imgLink")}
                            placeholder="Cover img Link" />
                    </div>
                    <div className="mb-3">
                        <label>Rating</label>
                        <input
                            required
                            type='number'
                            className="form-control"
                            {...register("rating")}
                            placeholder="Shop Rating on 5"
                        />
                    </div>



                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            <Shop /> Add shop
                        </button>
                    </div>
                </form>

                <ManageShops />

            </Row>



        </div>
    );
};

export default AddShop;