import { useContext, useEffect, useState } from "react";
import { AddCartArrayContext } from "../ContextApi/Context";
import { RiEqualizerLine } from "react-icons/ri";
import CartItem from "./CartItem";

const Cart = () => {
    const cartList = useContext(AddCartArrayContext)
    const [disable,setDisable]=useState(true)
useEffect(()=>{
    if(cartList.length <= 0){
        setDisable(true)
    }else{
        setDisable(false)
    }
},[cartList.length])
    return (
        <div className="my-10 mx-3">
           <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Cart </h1>
            <div className="flex items-center gap-6">
                <h1 className="text-2xl font-bold">Total Cost:</h1>
                <button className="btn rounded-3xl bg-white text-[#9538E2] border border-[#9538E2]">Sort by Price <RiEqualizerLine /></button>
                <button disabled={disable} className="btn rounded-3xl bg-banner text-white">Purchase</button>
            </div>
           </div>
           <div>
            {
                cartList.map(item=><CartItem key={item.product_id} gadget={item}/>)
            }
           </div>
        </div>
    );
}; 
export default Cart;