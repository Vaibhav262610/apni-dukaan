import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useState } from "react";

const HeroSection = ({ myData }) => {
  const { user, isAuthenticated } = useAuth0();
  const [darkMode, setDarkMode] = useState(false);
  const { name } = myData;
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        <div className="hero-section dark:transition-all dark:text-white dark:bg-black h-screen items-center flex  justify-center">
          <div className="flex w-5/12 hero-section-width  ">
            <div className="flex flex-col ">
              <h1 className=" w-fit">Welcome to</h1>
              {isAuthenticated ? (
                <h1 className="text-4xl w-fit  font-bold uppercase ">{user.name}'s Store</h1>
              ) : (
                <h1 className="text-4xl w-fit  font-bold ">Your Store</h1>
              )}
              <p className="w-fit mt-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eveniet repellendus a impedit numquam magni? Harum id error
                soluta quos enim voluptatem illo aspernatur temporibus veniam!
                Sunt reiciendis repellendus aliquid nesciunt?
              </p>
              <button className="shop-btn mt-8  font-semibold w-fit">
                Shop Now
              </button>
            </div>
          </div>

          {/* <div className="dark-mode text-4xl">
           
          </div> */}
          {/* <div className="flex  w-5/12  flex-col justify-center items-center">
            <h1 className="">IMAGE NOT LOADED</h1>
            </div> */}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
