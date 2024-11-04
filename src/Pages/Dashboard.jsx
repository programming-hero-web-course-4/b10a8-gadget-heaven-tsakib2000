import { useState } from "react";
import Cart from "../Components/Cart";
import Wishlist from "../Components/Wishlist";
import useTitle from "../Components/useTitle";

const Dashboard = () => {
    useTitle('Dashboard')
    const [toggle,setToggle]=useState(true)
    const handleToggle=name=>{
        if(name == 'cart'){
            setToggle(true)
        }else if(name=='wishlist'){
            setToggle(false)
        }
    }

  return (
    <div>
      <div className="p-8 text-center gap-5 flex flex-col justify-center items-center bg-banner">
        <h1 className="text-white text-4xl font-bold">Dashboard</h1>
        <p className="text-white font-thin">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex gap-4">
          <button onClick={()=>handleToggle('cart')} className={`btn rounded-3xl ${toggle?'bg-white text-[#9538E2]':' bg-banner text-white'}`}>Cart</button>
          <button onClick={()=>handleToggle('wishlist')} className={`btn rounded-3xl ${toggle?'bg-banner text-white':'bg-white text-[#9538E2]'}`}>Wishlist</button>
        </div>
      </div>
      {
        toggle?<Cart/>:<Wishlist/>
      }
    </div>
  );
};

export default Dashboard;
