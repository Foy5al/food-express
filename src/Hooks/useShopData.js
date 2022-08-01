import axios from "axios";
import { useEffect, useState } from "react";

const useShopData = (shopId) => {
    const [shopDetails, setShopDetails] = useState([]);
    const url = `${process.env.REACT_APP_URL}/shop/${shopId}`;
    useEffect(() => {
        axios.get(url)
            .then(resp => setShopDetails(resp.data))
    }, [])
    return shopDetails;

}

export default useShopData;