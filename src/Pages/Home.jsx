import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <>
      <div className="relative mb-[300px]">
        <Banner />
        <Hero />
      </div>
      
      <div>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0B0B0B]" >Explore Cutting-Edge Gadgets</h1>
        </div>
        <div className=" grid grid-cols-4">
          <Categories />
        </div>
      </div>
    </>
  );
};

export default Home;
