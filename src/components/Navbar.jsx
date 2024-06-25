import React from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-200 flex  justify-center fixed w-full">
        <div className="flex  w-full py-4 px-8 items-center justify-between">
          <div>
            <NavLink to="/">
              <div className="flex text-lg items-center logo">
                <h1 className="apni font-black">APNI</h1>
                <h1 className="font-black pl-2">DUKAN</h1>
              </div>
            </NavLink>
          </div>
          <div>
            <div className=" flex items-center gap-8">
              <ul className="nav-buttons flex items-center gap-8">
                <li className="nav-text">
                  <NavLink className=" font-semibold" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="">
                  <NavLink className=" font-semibold" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="">
                  <NavLink className=" font-semibold" to="/product">
                    Products
                  </NavLink>
                </li>
                <li className="">
                  <NavLink className=" font-semibold" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div>
                <button className="btn">Log In</button>
              </div>
              <div className='cart'>
                <NavLink to="cart">
                  <FiShoppingCart className="text-xl" />
                  <div className="cart-number">
                    <h1>10</h1>
                  </div>
                </NavLink>
              </div>
              <CgMenu className="text-2xl nav-menu" />
              <CgClose className="text-2xl nav-close" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
