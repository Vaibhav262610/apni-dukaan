import { add } from "@/store/userSlice";
import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";

const AllProductPage = (props) => {


  const dispatch = useDispatch()

  const addItem = (val) => {
    dispatch(add(val))
  }


  // console.log(productList.productData[0].productName);
  return (
    <>
      <div className="pt-40 flex flex-col justify-center items-center pb-24">
        <h1 className="text-4xl uppercase font-black">PRODUCTS</h1>
        <div className="flex h-max   pt-20  gap-2 w-full flex-wrap justify-center items-c   enter border-l-orange-400">
          {props.data.productData.map((val) => {
            return (
              <>
                <main key={val.id} className="box ">
                  <NavLink to={`/SingleProduct/${val.id}`}>
                    <div className="relative flex flex-col ">
                      <img src={val.productImage} height={300} width={300} />
                      <div className="absolute h-full items-end flex">
                        <div>
                          <h2 className="bg-white price">{val.price}</h2>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                  <div className=" ml-4 flex justify-between pt-2 items-center">
                    <div>
                      <h1>{val.productName}</h1>
                      <h2 className="text-gray-400 pb-4">{val.product}</h2>
                    </div>
                    <div>
                      <FaPlusCircle onClick={() => addItem(val)} className="text-2xl cursor-pointer hover:text-green-500 duration-200 transition-all  text-gray-700 mr-4 mb-4" />
                    </div>
                  </div>
                </main>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllProductPage;
