import { useContext } from "react";
import { AddWishArrayContext } from "../ContextApi/Context";
import WishItem from "./WishItem";




const Wishlist = () => {
    const wishlist = useContext(AddWishArrayContext)

    return (
        <>
        <div className="p-4">
        <h1 className="text-2xl font-bold">wishlist</h1>
        </div>
        <div>
         {
            wishlist.map(item=> <WishItem key={item} gadget={item}/>)
         }
        </div>
        </>
    );
};

export default Wishlist;