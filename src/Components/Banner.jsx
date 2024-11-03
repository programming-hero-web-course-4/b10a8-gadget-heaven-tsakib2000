import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div className="hero bg-banner min-h-[630px] rounded-b-3xl ">
        <div className="hero-content text-center mb-44">
          <div className="">
            <h1 className="text-6xl text-white font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6 text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button onClick={()=>navigate('/dashboard')} className="btn text-[#9538E2] bg-white rounded-3xl">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
