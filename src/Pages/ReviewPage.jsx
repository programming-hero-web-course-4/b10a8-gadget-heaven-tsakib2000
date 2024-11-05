
import ReviewCard from "../Components/ReviewCard";
import { useEffect, useState } from "react";
import useTitle from "../Components/useTitle";


const ReviewPage = () => {
    const [reviewData,setReviewData]=useState([])
    useTitle('Feedback')
    useEffect(()=>{

        fetch('/review.json')
        .then(res => res.json())
        .then(data=>setReviewData(data))
        
    },[])
    return (
    <>
  <div className="p-8 text-center gap-5 flex flex-col justify-center items-center bg-banner">
        <h1 className="text-white text-4xl font-bold capitalize">Welcome to feedback section</h1>
        <p className="text-white font-thin">
        Explore genuine feedback from our valued customers. Learn about their experiences with our products and services.
        </p>

      </div>
        <div className="grid grid-cols-2">
           {
            reviewData.map((review,idx)=> <ReviewCard key={idx} review={review}/>)
           }
        </div>
        </>
    );
};

export default ReviewPage;