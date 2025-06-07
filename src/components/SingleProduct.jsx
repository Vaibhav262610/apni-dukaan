import { add } from "@/store/userSlice";
import React from "react";
import productList from "./products/ProductList";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const { id } = useParams();
  const myProduct = productList.productData[id - 1];

  const dispatch = useDispatch();

  const addCart = (myProduct) => {
    dispatch(add(myProduct));
  };

  return (
    <>
      <div className="flex gap-4 h-screen items-center justify-center ">
        <div className="flex  md:flex-row flex-col items-center w-9/12 justify-around gap-6 md:gap-20 md:pt-4 pt-20 rounded-md">
          <img
            src={myProduct.productImage}
            className="bg-gray-200 p-4 rounded-md"
            height={600}
            width={600}
            alt=""
          />
          <div className="flex flex-col gap-8 md:gap-12">
            <h1 className="text-4xl font-semibold">{myProduct.productName}</h1>
            <div className="flex flex-col">
              <h1 className="font-semibold text-gray-400 text-xl">PRICE</h1>
              <h1 className=" text-3xl text-green-700">$ {myProduct.price}</h1>
            </div>
            <div className="flex flex-col">
              <h1 className="uppercase text-gray-400 font-semibold text-xl">
                description
              </h1>
              <h1 className="  text-gray-400">{myProduct.desc}</h1>
            </div>
            <div>
              <button
                onClick={() => addCart(myProduct)}
                className="bg-purple-400 px-8 rounded text-white font-bold hover:text-gray-300 hover:bg-purple-600 duration-200 py-2"
              >
                ADD TO CART{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
