import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useShopData from '../../../../../Hooks/useShopData';

const AddShopMenu = () => {
    const { register, handleSubmit, reset } = useForm();
    const [menuData, setMenuData] = useState([]);

    const { shopName } = useParams();

    const shopdata = useShopData(shopName);

    useEffect(() => {
        if (shopdata.resturent_name !== undefined) {

            let defaultValues = {};
            defaultValues.shopName = `${shopdata.resturent_name}`;
            reset({ ...defaultValues });
        }
    }, [shopdata]);




    const onSubmit = data => {
        console.log(data);
        setMenuData([...menuData, data]);
        const url = `${process.env.REACT_APP_URL}/add/menu/${shopName}`;
        axios.post(url, data)
            .then(resp => {
                if (resp.data.insertedId) {
                    alert('Added data successfully');
                    reset({
                        itemName: '',
                        description: '',
                        price: '',
                        imgurl: ''

                    })
                }
            })
    }


    return (
        <div className='container containerHeight'>
            <div className="mb-3">
                <h4 className='text-center shadow p-2 rounded my-2'>Menu List of {shopdata.resturent_name}</h4>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="itemName">Shop Name</label>
                    <fieldset disabled>
                        <input type="text"
                            className="form-control" id='itemName' {...register("shopName", { required: true })} />
                    </fieldset>

                    <label htmlFor="itemName">Item Name</label>
                    <input type="text"
                        className="form-control" id='itemName' {...register("itemName", { required: true })} placeholder="Item Name" />

                    <label htmlFor="description">Description</label>
                    <textarea type="text"
                        className="form-control" {...register("description")} placeholder="1 plate biriyani with 1 galss of borhani and salad" />


                    <label htmlFor="price">Price</label>
                    <input className="form-control" type="price" {...register("price")} placeholder="Price" />

                    <label htmlFor="imgurl">Item Image Url</label>
                    <input type="url"
                        className="form-control" {...register("imgurl")} placeholder="https://i.ibb.co/558CDnT/wiring.jpg" />
                    <div className="d-grid">



                        <button type="submit" className="btn btn-primary mt-2">
                            Add To Menu
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default AddShopMenu;