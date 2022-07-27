import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddShopMenu = () => {
    const { register, handleSubmit, reset } = useForm();
    const [menuData, setMenuData] = useState([]);
    const onSubmit = data => {
        setMenuData([...menuData, data]);
    }
    // console.log(menuData);
    return (
        <div>
            <div className="mb-3">
                <h4 className='text-center shadow p-2 rounded my-2'>Menu List</h4>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="itemName">Item Name</label>
                    <input type="text"
                        className="form-control" id='itemName' {...register("itemName", { required: true })} placeholder="Item Name" />

                    <label htmlFor="description">Description</label>
                    <textarea type="text"
                        className="form-control" {...register("description")} placeholder="1 plate biriyani with 1 galss of borhani and salad" />


                    <label htmlFor="price">Price</label>
                    <input className="form-control" type="price" {...register("price")} placeholder="Price" />

                    <label htmlFor="imgurl">Item Image Url</label>
                    <input type="text"
                        className="form-control" {...register("imgurl")} placeholder="https://i.ibb.co/558CDnT/wiring.jpg" />
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary mt-2">
                            Add Menu
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default AddShopMenu;