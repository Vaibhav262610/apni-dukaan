import React from "react";

const HeroSection = ({ myData }) => {

    const { name } = myData;

  return (
    <>
      <div className="hero-section h-screen items-center flex  justify-center">
        <div className="flex w-5/12  ">
          <div className="flex flex-col ">
            <h1 className=" w-fit">Welcome to</h1>
            <h1 className="text-4xl w-fit  font-bold ">
              {name}
            </h1>
            <p className="w-fit  mt-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              repellendus a impedit numquam magni? Harum id error soluta quos
              enim voluptatem illo aspernatur temporibus veniam! Sunt reiciendis
              repellendus aliquid nesciunt?
            </p>
            <button className="btn mt-8  font-semibold w-fit">
              Shop Now
            </button>
          </div>
        </div>
          {/* <div className="flex  w-5/12  flex-col justify-center items-center">
            <h1 className="">IMAGE NOT LOADED</h1>
          </div> */}
      </div>
    </>
  );
};

export default HeroSection;
