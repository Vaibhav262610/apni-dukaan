import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex gap-4 h-screen w-full justify-center text-center items-center flex-col">
          <h1 className="text-8xl font-black ">404</h1>
          <h1 className="text-5xl font-semibold">UH OH! You're lost.</h1>
          <h1 className="text-gray-400">
            The page you are looking for does not exist. How you got here is a
            mystery, But you can click the button below to go back to the
            homepage
          </h1>
          <NavLink to="/">
            <button className="shop-btn">HOME</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
