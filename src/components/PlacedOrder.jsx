import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const PlacedOrder = () => {
  const [loader, setLoader] = useState(false);
  const load = () => {
    setLoader(true);
  };
  setTimeout(load, 3000);

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        {loader ? (
          <div className=" flex flex-col gap-2 items-center">
            <h1 className=" text-3xl font-bold ">CONGRATULATIONS!!</h1>
            <h1 className="text-2xl font-semibold text-green-800">
              {" "}
              YOUR ORDER PLACED 👏
            </h1>
            <NavLink to="/product">
              <button className="btn mt-12">Continue Shopping</button>
            </NavLink>
          </div>
        ) : (
          <div>
            <div className="gooey">
              <span className="dot"></span>
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PlacedOrder;
