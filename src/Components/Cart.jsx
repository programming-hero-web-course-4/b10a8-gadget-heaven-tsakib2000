import { useContext, useEffect, useState } from "react";
import { AddCartArrayContext, PurchaseItem, SortCartFunc } from "../ContextApi/Context";
import { RiEqualizerLine } from "react-icons/ri";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate()
    const sortFunc=useContext(SortCartFunc)
    const cartList = useContext(AddCartArrayContext)
    const purchase =useContext(PurchaseItem)
    const [disable,setDisable]=useState(true)
    const [totalCost,setTotalCost]=useState(0)
    
useEffect(()=>{
    if(cartList.length <= 0){
        setDisable(true)
    }else{
        setDisable(false)
    }
    const cartPrice=cartList.map(item=> item.price)
    setTotalCost(cartPrice.reduce((p,c)=>{return p+c},0))
},[cartList, cartList.length])
const handlePurchase=()=>{
    purchase([])
    setTotalCost(0)
    document.getElementById('my_modal_5').showModal()
}
    return (
        <div className="my-10 mx-3">
           <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Cart </h1>
            <div className="flex items-center gap-6">
                <h1 className="text-2xl font-bold">Total Cost: $ {totalCost}</h1>
                <button onClick={sortFunc} className="btn rounded-3xl bg-white text-[#9538E2] border border-[#9538E2]">Sort by Price <RiEqualizerLine /></button>
                <button onClick={()=>handlePurchase()} disabled={disable} className="btn rounded-3xl bg-banner text-white">Purchase</button>
            </div>
           </div>
           <div>
            {
                cartList.map(item=><CartItem key={item.product_id} gadget={item}/>)
            }
           </div>
           {/* Open the modal using document.getElementById('ID').showModal() method */}

           <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button onClick={()=>navigate('/')} className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
}; 
export default Cart;