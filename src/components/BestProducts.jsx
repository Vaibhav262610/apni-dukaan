import React from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from "@/store/userSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BestProducts = ({ products }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adminAccess = useSelector((state) => state.apna.adminAccess);

  const addItem = (val) => {
    if (!adminAccess) {
      toast.error('Please login first to add items to cart', {
        duration: 3000,
        position: 'top-center',
      });
      navigate('/login');
      return;
    }
    
    dispatch(add(val));
    toast.success(`${val.productName} added to cart!`, {
      duration: 2000,
      position: 'top-center',
    });
  };

  // Get top 4 products based on price (you can change this logic based on your needs)
  const bestProducts = [...(products || [])]
    .sort((a, b) => b.price - a.price)
    .slice(0, 4);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {bestProducts.map((product) => (
        <div
          key={product.id}
          className="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <NavLink to={`/SingleProduct/${product.id}`}>
            <div className="relative">
              <img
                src={product.productImage}
                alt={product.productName}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded-full flex items-center gap-1">
                <FaStar className="text-sm" />
                <span className="text-sm font-semibold">4.5</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h2 className="text-white text-xl font-semibold">₹{product.price}</h2>
              </div>
            </div>
          </NavLink>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {product.productName}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{product.product}</p>
            <button
              onClick={() => addItem(product)}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <FaShoppingCart />
              Add to Cart
            </button>
          </div>
        </div>
      ))}

      <div className="text-center mt-8 col-span-full">
        <NavLink
          to="/product"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          View All Products
        </NavLink>
      </div>
    </div>
  );
};

export default BestProducts; 