import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCard from "./SingleCard";


const Cards = () => {
    const data = useLoaderData()
  
    const {categoryID}=useParams()
    const [gadgets,setGadgets]=useState([])
    const[viewAll,setViewAll]=useState(false)
    useEffect(()=>{
     if(categoryID){
        const filteredGadgets = [...data].filter(gadget=> gadget.category == categoryID)
        setGadgets(filteredGadgets)
     }else{
        setGadgets(data)
     }
    },[categoryID, data])
    const handleViewAll=()=>{
        setViewAll(true)
        
    }
    return (
        <div className="col-span-3 grid grid-cols-3 gap-4">
            {
          
             viewAll?   gadgets.map(gadget=> <SingleCard gadget={gadget} key={gadget.product_id}></SingleCard>):  gadgets.slice(0,6).map(gadget=> <SingleCard gadget={gadget} key={gadget.product_id}></SingleCard>)
              
              
            
            }
            <div>
                <button onClick={handleViewAll} className={`btn bg-banner text-white font-bold ${ gadgets.length<7?'hidden':viewAll ?'hidden':' '} `}>View All</button>
            </div>
        </div>
    );
};

export default Cards;