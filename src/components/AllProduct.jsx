import React from "react";
import productList from "./products/ProductList";

const AllProductPage = () => {
  // console.log(productList.productData[0].productName);
  return (
    <>
      <div className="pt-40 flex flex-col justify-center items-center">
        <h1 className="text-4xl uppercase font-black">PRODUCTS</h1>
        <div className="flex h-max   pt-20  gap-2 w-full flex-wrap justify-center items-center border-l-orange-400">
          {productList.productData.map((val) => {
            return (
              <>
                <main key={val.id} className="box cursor-pointer">
                  <div className="relative flex flex-col ">
                    <img src={val.productImage} height={300} width={300} />
                    <div className="absolute h-full items-end flex">
                      <div>
                        <h2 className="bg-white price">{val.price}</h2>
                      </div>
                    </div>
                  </div>
                  <div className=" ml-4 pt-2">
                    <h1>{val.productName}</h1>
                    <h2 className="text-gray-400 pb-4">{val.product}</h2>
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
