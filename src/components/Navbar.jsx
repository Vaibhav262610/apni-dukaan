import { logOut } from "@/store/userSlice";
import React, { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const adminAccess = useSelector((state) => state.apna.adminAccess);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <>
      <div className="bg-gray-200 flex z-50 justify-center fixed w-full">
        <div className="flex w-full py-4 px-8 items-center justify-between">
          <div>
            <NavLink to="/">
              <div className="flex text-lg items-center logo">
                <h1 className="apni font-black">APNI</h1>
                <h1 className="font-black pl-2">DUKAN</h1>
              </div>
            </NavLink>
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search products..."
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <div className={openMenu ? "flex active items-center gap-8" : "flex items-center gap-8"}>
              <ul className="nav-buttons flex items-center gap-8">
                <li className="nav-text">
                  <NavLink
                    onClick={() => setOpenMenu(false)}
                    className="font-semibold"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setOpenMenu(false)}
                    className="font-semibold"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setOpenMenu(false)}
                    className="font-semibold"
                    to="/product"
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setOpenMenu(false)}
                    className="font-semibold"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>

              <div className="mobile-navbar-btn">
                <CgMenu
                  name="menu-btn"
                  className="text-2xl nav-menu"
                  onClick={() => setOpenMenu(true)}
                />
                <CgClose
                  name="close-btn"
                  className="text-2xl nav-menu close-btn"
                  onClick={() => setOpenMenu(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setOpenMenu(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-end mb-6">
                  <CgClose
                    className="text-2xl cursor-pointer"
                    onClick={() => setOpenMenu(false)}
                  />
                </div>
                <div className="space-y-4">
                  <NavLink
                    to="/"
                    className="block text-lg font-semibold hover:text-blue-600"
                    onClick={() => setOpenMenu(false)}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    className="block text-lg font-semibold hover:text-blue-600"
                    onClick={() => setOpenMenu(false)}
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/product"
                    className="block text-lg font-semibold hover:text-blue-600"
                    onClick={() => setOpenMenu(false)}
                  >
                    Products
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className="block text-lg font-semibold hover:text-blue-600"
                    onClick={() => setOpenMenu(false)}
                  >
                    Contact
                  </NavLink>
                  {adminAccess ? (
                    <button
                      onClick={() => {
                        handleLogout();
                        setOpenMenu(false);
                      }}
                      className="block w-full text-left text-lg font-semibold text-red-600 hover:text-red-700"
                    >
                      Log Out
                    </button>
                  ) : (
                    <NavLink
                      to="/login"
                      className="block text-lg font-semibold text-blue-600 hover:text-blue-700"
                      onClick={() => setOpenMenu(false)}
                    >
                      Log In
                    </NavLink>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
