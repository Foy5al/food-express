import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(``)
            .then(resp => resp.json())
            .then(data => setProducts(data.products))
    }, [])
    return {products, setProducts
    };
}
export default useProducts;