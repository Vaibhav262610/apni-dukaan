import { remove } from "@/store/userSlice";
import React from "react";
import { IoRemoveCircleSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.apna);

  const dispatch = useDispatch();

  const removeHandler = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <>
      <div>
        {products.length > 0 ? (
          <div className="uppercase text-3xl pt-32 flex justify-center font-bold  ">
            <h1 mt-12>Your Cart </h1>
          </div>
        ) : (
          <div className="uppercase text-3xl  flex h-screen items-center justify-center font-bold  ">
            <h1 mt-12>Your Cart is empty ☹️</h1>
          </div>
        )}
        <div className="flex gap-4 items-center flex-col justify-center mt-12">
          {products.map((items) => {
            return (
              <>
                <div className="flex items-center bg-gray-200 w-9/12 justify-around rounded-md">
                  <img
                    src={items.productImage}
                    height={100}
                    width={100}
                    alt=""
                  />
                  <h1 className="font-semibold">{items.productName}</h1>
                  <h1 className="font-semibold text-green-700">
                    {items.price}
                  </h1>
                  <MdDelete
                    onClick={() => removeHandler(items.id)}
                    className="text-3xl text-red-500 cursor-pointer duration-200 transition-all hover:text-red-700"
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
