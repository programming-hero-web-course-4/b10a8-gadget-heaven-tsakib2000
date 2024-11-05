import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCard from "./SingleCard";


const Cards = () => {
    const data = useLoaderData()
  
    const {categoryID}=useParams()
    const [gadgets,setGadgets]=useState([])
    useEffect(()=>{
     if(categoryID){
        const filteredGadgets = [...data].filter(gadget=> gadget.category == categoryID)
        setGadgets(filteredGadgets)
     }else{
        setGadgets(data)
     }
    },[categoryID, data])
    return (
        <div className="col-span-3 grid grid-cols-3 gap-4">
            {
                gadgets.map(gadget=> <SingleCard gadget={gadget} key={gadget.product_id}></SingleCard>)
            }
        </div>
    );
};

export default Cards;