import React from "react";
import productList from "./products/ProductList";
import AllProductPage from "./AllProduct";

const Product = () => {
  // console.log(productList.productData[0].productName);
  return (
    <>
      <div className="">
        <AllProductPage data={productList} />
      </div>
    </>
  );
};

export default Product;
