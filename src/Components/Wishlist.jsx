import { useContext } from "react";
import { AddWishArrayContext } from "../ContextApi/Context";
import WishItem from "./WishItem";




const Wishlist = () => {
    const wishlist = useContext(AddWishArrayContext)

    return (
        <div>
         {
            wishlist.map(item=> <WishItem key={item} gadget={item}/>)
         }
        </div>
    );
};

export default Wishlist;