import React, { useState } from "react";

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
          <div>
            <h1>ORDER PLACED</h1>
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
