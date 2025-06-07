import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "@/store/userSlice";
import { FaShoppingCart, FaStar, FaTruck, FaUndo, FaShieldAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const sampleProduct = {
        id: id,
        productName: "Premium Wireless Headphones",
        product: "High-quality wireless headphones with noise cancellation",
        price: 4999,
        productImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.8,
        description: "Experience premium sound quality with our latest wireless headphones. Features include active noise cancellation, 30-hour battery life, and comfortable over-ear design.",
        features: [
          "Active Noise Cancellation",
          "30-hour Battery Life",
          "Bluetooth 5.0",
          "Built-in Microphone",
          "Foldable Design"
        ],
        specifications: {
          "Battery Life": "30 hours",
          "Bluetooth Version": "5.0",
          "Weight": "250g",
          "Warranty": "1 year",
          "Color": "Black"
        }
      };
      setProduct(sampleProduct);
      setLoading(false);
    }, 1000);
  }, [id]);

  const addItem = (val) => {
    dispatch(add({ ...val, quantity }));
    toast.success(`${val.productName} added to cart!`, {
      duration: 2000,
      position: 'top-center',
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="gooey">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.productImage}
              alt={product.productName}
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full flex items-center gap-1">
              <FaStar className="text-sm" />
              <span className="text-sm font-semibold">{product.rating}</span>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.productName}</h1>
              <p className="text-2xl font-semibold text-blue-600 mt-2">₹{product.price}</p>
            </div>

            <div className="border-t border-b border-gray-200 py-4">
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-gray-700">Quantity:</label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-1"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => addItem(product)}
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <FaShoppingCart />
                Add to Cart
              </button>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-2 text-gray-600">
                <FaTruck className="text-blue-600" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaUndo className="text-blue-600" />
                <span>Easy Returns</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaShieldAlt className="text-blue-600" />
                <span>Secure Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
