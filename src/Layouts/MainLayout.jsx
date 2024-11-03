import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <>
     <div className="w-[1540px] mx-auto">
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