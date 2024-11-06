/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { CiHeart } from "react-icons/ci";
import { AddWishContext,  GadgetContext} from "../ContextApi/Context";



const DetailsCard = ({ gadget }) => {
 const addFunction = useContext(GadgetContext)
 const addToWish = useContext(AddWishContext)
 const [disable,setDisable]=useState(false)
 
  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = gadget;
const handleDisable=()=>{
  setDisable(true)
}
  return (
    <div className="hero w-9/12 mx-auto bg-white rounded-2xl min-h-max">
      <div className="hero-content flex-col justify-evenly lg:flex-row">
        <img
          src={product_image}
          className="max-w-sm rounded-lg lg:mr-11 shadow-2xl"
        />
        <div className="flex flex-col justify-between gap-4">
          <h1 className="text-3xl font-bold">{product_title}</h1>
          <h1 className="text-xl text-gray-500 font-semibold">
            Price: $ {price}
          </h1>
          <div
            className={` w-max px-2 rounded-3xl py-1 text-xs border text-black ${
              availability
                ? " border-green-500 bg-green-100"
                : " border-red-300 bg-red-100"
            }`}
          >
            {availability ? "In Stock" : "Out Of Stock"}
          </div>

          <p className="py-6 text-sm font-thin text-gray-400">{description}</p>
          <div>
            <h1 className="text-lg font-bold text-bold">Specification</h1>
            <ul className="list-decimal list-inside text-gray-400 ">
              {specification?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-black font-bold text-lg">Rating </h3>
           <div className="flex gap-5">
           <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <h1 className="bg-gray-300 text-gray-600 px-2 p-1 rounded-xl">{rating}</h1>
           </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={()=>addFunction(gadget)} className="btn bg-banner rounded-3xl text-white font-bold text-lg">Add To Cart <AiOutlineShoppingCart /></button>
            <button disabled={disable}  onClick={()=>{addToWish(gadget);handleDisable()}} className="btn rounded-full p-4 border border-gray-400 bg-white text-lg"><CiHeart /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
