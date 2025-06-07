import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CartLogo = () => {
  const product = useSelector((state) => state.apna.apna);
  return (
    <>
      <div className="fixed z-50 bottom-5 right-5  md:bottom-12 md:right-12">
        <NavLink to="cart">
          <div className="bg-purple-400 w-fit p-5 rounded-full">
            <FiShoppingCart className="  text-xl" />
            <div className="cart-number rounded-full">
              <h1>{product.length}</h1>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default CartLogo;
