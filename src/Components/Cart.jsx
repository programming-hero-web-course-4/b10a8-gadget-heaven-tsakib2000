import { useContext } from "react";
import { AddCartArrayContext } from "../ContextApi/Context";


const Cart = () => {
    const cartList = useContext(AddCartArrayContext)
    return (
        <div>
           <h1>Cart{cartList.length}</h1> 
        </div>
    );
};

export default Cart;