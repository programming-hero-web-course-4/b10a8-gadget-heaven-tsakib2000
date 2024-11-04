/* eslint-disable react/prop-types */

import { useContext } from "react";
import {  GadgetContext } from "../ContextApi/Context";

const WishItem = ({gadget}) => {
    const addCart = useContext(GadgetContext)
    const { product_image, product_title, price, description } = gadget;
    return (
        <div className="rounded-xl bg-white m-4">
        <div className="flex justify-between items-center m-4 ">
  <div className="flex items-center">
  <div className="h-32 p-4 ">
            <img className="h-full rounded-xl" src={product_image} alt="" />
          </div>
          <div className="p-4 flex flex-col ">
            <h1 className="text-xl font-bold">{product_title}</h1>
            <p className=" text-gray-400">{description}</p>
            <p className="text-xl text-gray-500 font-semibold">
              Price: $ {price}
            </p>
          <button onClick={()=>addCart(gadget)} className="btn w-max bg-banner text-white rounded-3xl">Add to cart</button>
          </div>
  </div>
    
        </div>
      </div>
    );
};

export default WishItem;