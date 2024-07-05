import React, { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { user, logout, loginWithRedirect, isAuthenticated } = useAuth0();
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
            <div
              className={
                openMenu
                  ? "flex active items-center gap-8"
                  : "flex items-center gap-8"
              }
            >
              <ul className="nav-buttons flex items-center gap-12">
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
              </ul>
              <div>
                {isAuthenticated ? (
                  <button
                    className="btn"
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log Out
                  </button>
                ) : (
                  <button className="btn" onClick={() => loginWithRedirect()}>
                    Log In
                  </button>
                )}
              </div>
              <div className="cart">
                <NavLink to="cart">
                  <FiShoppingCart className="text-xl" />
                  <div className="cart-number">
                    <h1>10</h1>
                  </div>
                </NavLink>
              </div>
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
