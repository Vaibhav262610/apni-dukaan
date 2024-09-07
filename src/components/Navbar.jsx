import { logOut } from "@/store/userSlice";
import React, { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const adminAccess = useSelector((state) => state.apna.adminAccess);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch(); // Initialize useDispatch

  const handleLogout = () => {
    dispatch(logOut()); // Dispatch the logOut action
  };

  return (
    <>
      <div className="bg-gray-200 flex z-50  justify-center fixed w-full">
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
            <div
              className={
                openMenu
                  ? "flex active items-center gap-8"
                  : "flex items-center gap-8"
              }
            >
              <ul className="nav-buttons flex items-center gap-8">
                <li className="nav-text">
                  <NavLink
                    onClick={() => {
                      setOpenMenu(false);
                    }}
                    className=" font-semibold"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => {
                      setOpenMenu(false);
                    }}
                    className=" font-semibold"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => {
                      setOpenMenu(false);
                    }}
                    className=" font-semibold"
                    to="/product"
                  >
                    Products
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => {
                      setOpenMenu(false);
                    }}
                    className=" font-semibold"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  {adminAccess ? (
                    <div className="flex gap-8">
                      <button onClick={handleLogout} className="btn">
                        Log Out
                      </button>
                      {/* <img src={user.picture} className="profile-pic" alt="" /> */}
                    </div>
                  ) : (
                    <NavLink to="/login">
                      <button className="btn">Log In</button>
                    </NavLink>
                  )}
                </li>
              </ul>

              <div className="mobile-navbar-btn">
                <CgMenu
                  name="menu-btn"
                  className="text-2xl nav-menu"
                  onClick={() => {
                    setOpenMenu(true);
                  }}
                />
                <CgClose
                  name="close-btn"
                  className="text-2xl nav-menu close-btn"
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
