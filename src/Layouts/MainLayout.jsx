import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import {
  AddCartArrayContext,
  AddWishContext,
  GadgetContext,
  AddWishArrayContext,
  SortCartFunc,
  PurchaseItem,
 

} from "../ContextApi/Context";

import { useState } from "react";
import toast from "react-hot-toast";


const MainLayout = () => {
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);


  const handleAddToCart = (gadget) => {
    const isExist = cart.find((item) => item.product_id == gadget.product_id);
    if (isExist) {
      toast.error("Product already in Cart");
    } else if (gadget.availability == false) {
      toast.error("Product is out of stock. You can add to wish list for now ");
    } else {
      const newCart = [...cart, gadget];
      setCart(newCart);
      toast.success(`${gadget.product_title} added to cart`);
    }
  };

  const handleAddToWish = (gadget) => {

    

      const newWish = [...wish, gadget];
      setWish(newWish);
      
      toast.success(`${gadget.product_title} added wish list`);
      

  
  };
  const handleSort = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  };

  return (
    <>
      <div className="w-11/12 mx-auto bg-base-200 rounded-3xl">
        <SortCartFunc.Provider value={handleSort}>
          <GadgetContext.Provider value={handleAddToCart}>
            <AddWishContext.Provider value={handleAddToWish}>
              <AddWishArrayContext.Provider value={wish}>
                <AddCartArrayContext.Provider value={cart}>
                  <PurchaseItem.Provider value={setCart}>
                    
                      
                        <Navbar />
                        <div className="min-h-[calc(100vh-288px)]">
                          <Outlet></Outlet>
                        </div>
                        <Footer />
                     
                   
                  </PurchaseItem.Provider>
                </AddCartArrayContext.Provider>
              </AddWishArrayContext.Provider>
            </AddWishContext.Provider>
          </GadgetContext.Provider>
        </SortCartFunc.Provider>
      </div>
    </>
  );
};

export default MainLayout;
