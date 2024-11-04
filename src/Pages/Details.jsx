import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "../Components/DetailsCard";
import { useEffect, useState } from "react";
import useTitle from "../Components/useTitle";

const Details = () => {
  useTitle('Details')
  const data = useLoaderData();
  const {id}=useParams()
  const[gadget,setGadget]=useState({})
useEffect(()=>{
 const detailedGadget= [...data].find(item=>item.product_id == id)
 setGadget(detailedGadget)
},[data, id])
  return (
    <div className="relative ">
      <div className="  h-[463px] p-8 bg-banner flex flex-col justify-center items-center gap-6 text-center">
        <h1 className="text-4xl text-white font-bold">Product Details</h1>
        <p className="text-white text-sm">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="relative -top-24">
        <DetailsCard gadget={gadget}/>
      </div>
    </div>
  );
};

export default Details;
