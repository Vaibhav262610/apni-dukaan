import React from "react";
import { useSelector } from "react-redux";

const SingleProduct = () => {
  const products = useSelector((state) => state.apna);

  return (
    <>
      <div className="flex gap-4 h-screen items-center flex-col justify-center ">
        {/* {products.map((items) => {
          return (
            <>
              <div className="flex items-center bg-gray-200 w-9/12 justify-around rounded-md">
                <img src={items.productImage} height={100} width={100} alt="" />
                <h1 className="font-semibold">{items.productName}</h1>
                <h1 className="font-semibold text-green-700">{items.price}</h1>
              </div>
            </>
          );
        })} */}
        <h1>LOADING.......</h1>
      </div>
    </>
  );
};

export default SingleProduct;
