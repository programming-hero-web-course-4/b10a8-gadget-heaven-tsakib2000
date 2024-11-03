import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <>
     <div className="w-11/12 mx-auto bg-base-200 rounded-3xl">
     <Navbar/>
        <div className="min-h-[calc(100vh-288px)]">
        <Outlet></Outlet>
        </div>
        <Footer/>
     </div>
        </>
    );
};

export default MainLayout;