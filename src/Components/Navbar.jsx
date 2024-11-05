import { Link, NavLink, useLocation } from "react-router-dom";
import { CiShoppingCart,CiHeart } from "react-icons/ci";
import { useContext} from "react";

import { AddCartArrayContext, AddWishArrayContext } from "../ContextApi/Context";


const Navbar = () => {
  const {pathname}= useLocation()
const cartList = useContext(AddCartArrayContext)
const wishList = useContext(AddWishArrayContext)

  const navlink = (
    <>
      <li>
        <NavLink className={({isActive})=>isActive?'underline':''} to='/' >Home</NavLink>
      </li>
      <li>
      <NavLink className={({isActive})=>isActive?' underline':''} to='/statistic' >Statistic</NavLink>
      </li>
      <li>
      <NavLink className={({isActive})=>isActive?'underline':' '} to='/dashboard' >Dashboard</NavLink>
      </li>
      <li>
      <NavLink className={({isActive})=>isActive?'underline':' '} to='/reviews' >Customer Feedback</NavLink>
      </li>
    </>
  );
  return (
    <div className={`navbar rounded-t-3xl mt-4 text-base font-bold ${(pathname== '/')  ?'bg-banner text-white':'bg-base-100 text-gray-500'  }`}>
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`bg-violet-400 menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow`}
          >
            {navlink}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-2xl">Gadget Heaven </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className={`menu menu-horizontal  px-1`}>{navlink}</ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="indicator"> 
        <span className="indicator-item badge text-xs"> {cartList.length}</span>
        <div className="btn text-lg rounded-full bg-white"><CiShoppingCart /></div>
        </div>
       <div className="indicator">
       <span className="indicator-item badge text-xs "> {wishList.length}</span>
       <div className="btn text-lg rounded-full bg-white"> <CiHeart /></div>
       </div>
      </div>
    </div>
  );
};

export default Navbar;
