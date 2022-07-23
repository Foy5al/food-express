import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';

const AddShop = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const url = `${process.env.REACT_APP_URL}/add/shop`;
        axios.post('http://localhost:5000/add/shop', data)
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



    const addMenu = () => {
    }
    return (
        <div className='container vh-100 w-50'>
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
                        Add shop
                    </button>
                </div>
            </form>



        </div>
    );
};

export default AddShop;