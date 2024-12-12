import React from "react";
import { Link } from "react-router-dom";
import { AiFillAccountBook } from "react-icons/ai";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { RiAccountBoxLine } from "react-icons/ri";

const Header = () =>{
  return (
    <header className="bg-blue-500 pt-4 relative">
      <div className="container mx-auto mb-4 flex justify-between items-center">

        {/* logo */}
        <Link to="/" className="flex items-center gap-2">
            <h1 className="text-white text-3xl font-Jost font-bold inline-flex">E-mart</h1>
            <AiFillAccountBook size={48} className="text-yellow-300"/>
        </Link> 

        {/* search bar */}
        <div className="flex items-center w-1/2 mx-auto gap-2">
        <div className="flex-1">
            <input 
            type="text" 
            placeholder="Search everything at E-mart" 
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            />
        </div>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-50 border border-gray-300 transition-colors">
            Search
        </button>
        </div>

        {/* navigation */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/products" className="gap-1 flex text-white hover:text-gray-300">
              <CiHeart className="text-white" size={24}/>
              Products</Link>
            </li>
            <li>
              <Link to="/account" className="gap-1 flex text-white hover:text-gray-300">
              <RiAccountBoxLine className="text-white" size={24}/>
              Account</Link>
            </li>
            <li>
              <Link to="/cart" className="flex gap-1 text-white hover:text-gray-300">
              <CiShoppingCart className="text-white" size={24}/>
              Cart</Link>
            </li>
          </ul>
        </nav>

      </div>
              {/* sub-navigation */}
        <div className="bg-blue-100 bottom-0 py-2">
        <ul className="flex flex-wrap gap-4 text-blue-800 mx-20">
            <li>
                <Link to="/departments" className="hover:text-blue-500 transition-colors">
                Departments
                </Link>
            </li>
            <li>
                <Link to="/services" className="hover:text-blue-500 transition-colors">
                Services
                </Link>
            </li>
            <li>|</li>
            <li>
                <Link to="/holiday-savings" className="hover:text-blue-500 transition-colors">
                Holiday savings
                </Link>
            </li>
            <li>
                <Link to="/grocery" className="hover:text-blue-500 transition-colors">
                Grocery Essentials
                </Link>
            </li>
            <li>
                <Link to="/christmas" className="hover:text-blue-500 transition-colors">
                Christmas Shop
                </Link>
            </li>
            <li>
                <Link to="/gifts" className="hover:text-blue-500 transition-colors">
                Gift Ideas
                </Link>
            </li>
            <li>
                <Link to="/toys" className="hover:text-blue-500 transition-colors">
                Toy Shop
                </Link>
            </li>
            <li>
                <Link to="/fashion" className="hover:text-blue-500 transition-colors">
                Fashion
                </Link>
            </li>
            <li>
                <Link to="/electronics" className="hover:text-blue-500 transition-colors">
                Electronics
                </Link>
            </li>
            </ul>
        </div>
    </header>
    
  );
}

export default Header;