import { remove, clearCart } from "@/store/userSlice";
import { Sun } from "lucide-react";
import React, { useState } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { IoRemoveCircleSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const [count, setCount] = useState(1);
  let products = useSelector((state) => state.apna.apna);

  let sum = 0;
  let finalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    sum += Number(products[i].price);
    finalPrice = sum.toFixed(2);
    // console.log(finalPrice);
  }
  // console.log(count);
  // console.log(sum);
  console.log(products);

  const handleClear = () => {
    dispatch(clearCart());
  };

  const dispatch = useDispatch();

  const increament = () => {
    setCount(count + 1);
  };

  const decreament = () => {
    setCount(count - 1);
  };

  const removeHandler = (productId) => {
    dispatch(remove(productId));
  };

  // const clearCart = () => {
  //   products = []
  //   console.log(products);
  // }

  return (
    <>
      <div>
        {products.length > 0 ? (
          <div className="uppercase text-3xl pt-32 flex justify-center font-bold  ">
            <h1 className="mt-12">Your Cart </h1>
          </div>
        ) : (
          <div className="uppercase text-3xl flex h-screen items-center justify-center font-bold  ">
            <h1 className="mt-12">Your Cart is empty ☹️</h1>
          </div>
        )}
        <div className="py-8 flex  overflow-y-scroll md:h-[30rem] Cart-items gap-4 items-center flex-col  ">
          {products.map((items) => {
            return (
              <div
                key={items.id}
                className="flex flex-wrap  items-center bg-gray-200 w-11/12 md:w-9/12 justify-around rounded-md"
              >
                <img src={items.productImage} height={100} width={100} alt="" />
                <div className="flex flex-col md:flex-row gap-1 md:gap-8">
                  <h1 className="font-semibold">{items.productName}</h1>
                  <h1 className="font-semibold text-green-700">
                    `${items.price}`
                  </h1>
                  <div className="flex items-center gap-2 ">
                    <FiMinusCircle
                      onClick={decreament}
                      className="text-xl  cursor-pointer hover:text-red-500"
                    />
                    <h1 className="text-xl">{count}</h1>
                    <FiPlusCircle
                      onClick={increament}
                      className="text-xl  cursor-pointer hover:text-green-500"
                    />
                  </div>
                </div>
                <MdDelete
                  onClick={() => removeHandler(items.id)}
                  className="text-3xl text-red-500 cursor-pointer duration-200 transition-all hover:text-red-700"
                />
              </div>
            );
          })}
        </div>
        {products.length > 0 ? (
          <div className=" bg-white flex-col pb-7 items-center gap-2 sm:pb-12 fixed bottom-0 w-full flex justify-center">
            <h1 className="text-2xl bg-green-200 py-2 w-full text-center font-bold">
              Total : $ {finalPrice}
            </h1>
            <NavLink to="/placeorder">
              <button onClick={handleClear} className="btn w-full sm:w-fit ">
                Place Order
              </button>
            </NavLink>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Cart;
