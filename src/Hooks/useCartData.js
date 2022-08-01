import { useContext } from "react";
import { CartContext } from "../components/Context/CartDataProvider";

const useAuth = () => {
    return useContext(CartContext);
}

export default useAuth;