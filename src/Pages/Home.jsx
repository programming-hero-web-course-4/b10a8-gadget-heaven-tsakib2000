import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Hero from "../Components/Hero";
import useTitle from "../Components/useTitle";

const Home = () => {
  useTitle('Home')
    const data=useLoaderData()
  return (
    <>
      <div className="relative mb-[400px]">
        <Banner />
        <Hero />
      </div>
      
      <div>
        <div className="text-center my-6">
          <h1 className="text-4xl font-bold text-[#0B0B0B]" >Explore Cutting-Edge Gadgets</h1>
        </div>
        <div className=" grid grid-cols-4 my-5 gap-6 p-2 ">
          <Categories categories={data} />
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Home;
