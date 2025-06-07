import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaShoppingBag, FaTruck, FaHeadset, FaShieldAlt } from "react-icons/fa";

const HeroSection = ({ myData }) => {
  const adminAccess = useSelector((state) => state.apna.adminAccess);
  const userName = useSelector((state) => state.apna.userName);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between py-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome to{" "}
              <span className="text-blue-600">
                {adminAccess ? `${userName}'s` : "Your"} Store
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover amazing products at unbeatable prices. Shop with confidence
              and enjoy a seamless shopping experience with our wide range of
              quality products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {adminAccess ? (
                <NavLink to="/product">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 flex items-center">
                    <FaShoppingBag className="mr-2" />
                    Shop Now
                  </button>
                </NavLink>
              ) : (
                <NavLink to="/login">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
                    Get Started
                  </button>
                </NavLink>
              )}
              <NavLink to="/about">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold border border-blue-600 hover:bg-blue-50 transition duration-300">
                  Learn More
                </button>
              </NavLink>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Shopping"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
     
    </div>
  );
};

export default HeroSection;
