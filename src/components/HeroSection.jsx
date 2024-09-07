import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
const HeroSection = ({ myData }) => {
  const adminAccess = useSelector((state) => state.apna.adminAccess);
  const userName = useSelector((state) => state.apna.userName);
  const location = useLocation();
  console.log(location.state);

  // const name = "vaibhav";

  return (
    <>
      <div className="">
        <div className="hero-section flex-col md:flex-row  dark:transition-all dark:text-white dark:bg-black h-screen items-center flex  justify-center">
          <div className="flex w-5/12 hero-section-width  ">
            <div className="flex flex-col ">
              <h1 className=" w-fit">Welcome to</h1>
              {adminAccess ? (
                <h1 className="text-3xl w-fit  font-bold uppercase ">
                  {userName}'s Store
                </h1>
              ) : (
                <h1 className="text-3xl w-fit  font-bold ">Your Store</h1>
              )}
              <p className="w-fit mt-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eveniet repellendus a impedit numquam magni? Harum id error
                soluta quos enim voluptatem illo aspernatur temporibus veniam!
                Sunt reiciendis repellendus aliquid nesciunt?
              </p>
              {/* <button className="shop-btn mt-8  font-semibold w-fit">
                Shop Now
              </button> */}
              {adminAccess ? (
                <div className="flex gap-8">
                  <NavLink to="/product">
                    <button className="shop-btn mt-8  font-semibold w-fit">
                      Shop Now
                    </button>
                  </NavLink>
                </div>
              ) : (
                <NavLink to="/login">
                  <button className="shop-btn mt-8  font-semibold w-fit">
                    Log In
                  </button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
