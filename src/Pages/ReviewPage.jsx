import { useLoaderData } from "react-router-dom";
import ReviewCard from "../Components/ReviewCard";


const ReviewPage = () => {
    const data = useLoaderData()
    return (<>
        <div className="grid grid-cols-2">
           {
            data.map((review,idx)=> <ReviewCard key={idx} review={review}/>)
           }
        </div>
        </>
    );
};

export default ReviewPage;