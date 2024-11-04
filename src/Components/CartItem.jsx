/* eslint-disable react/prop-types */
import { TiDeleteOutline } from "react-icons/ti";
const CartItem = ({ gadget }) => {

  const { product_image, product_title, price, description } = gadget;
 
  return (
    <div className="rounded-xl bg-white">
      <div className="flex justify-between items-center m-4 ">
<div className="flex items-center">
<div className="h-32 ">
          <img className="h-full rounded-xl" src={product_image} alt="" />
        </div>
        <div >
          <h1 className="text-2xl font-bold">{product_title}</h1>
          <p className=" text-gray-400">{description}</p>
          <p className="text-xl text-gray-500 font-semibold">
            Price: $ {price}
          </p>
        </div>
</div>
        <div>
          <button className="btn text-2xl text-red-600 rounded-full">
            <TiDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
