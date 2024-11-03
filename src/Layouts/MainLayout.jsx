import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <>
        <Navbar/>
        <div className="min-h-[calc(100vh-288px)]">
        <Outlet></Outlet>
        </div>
        <Footer/>
        </>
    );
};

export default MainLayout;