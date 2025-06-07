import React, { useEffect, useRef } from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import BestProducts from "./BestProducts";
import { useSelector, useDispatch } from "react-redux";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTruck, FaHeadset, FaShieldAlt, FaUndo, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaShoppingCart, FaStar } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { add } from "@/store/userSlice";
import toast from "react-hot-toast";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const products = useSelector((state) => state.apna.productData);
  const adminAccess = useSelector((state) => state.apna.adminAccess);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const bestProductsRef = useRef(null);
  const moreProductsRef = useRef(null);

  // Sample products data
  const sampleProducts = [
    {
      id: 1,
      productName: "Premium Wireless Headphones",
      product: "High-quality wireless headphones with noise cancellation",
      price: 4999,
      productImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.8
    },
    {
      id: 2,
      productName: "Smart Watch Series 5",
      product: "Advanced smartwatch with health monitoring features",
      price: 12999,
      productImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.6
    },
    {
      id: 3,
      productName: "Professional DSLR Camera",
      product: "High-resolution camera for professional photography",
      price: 54999,
      productImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      rating: 4.9
    },
    {
      id: 4,
      productName: "Gaming Laptop Pro",
      product: "High-performance gaming laptop with RTX graphics",
      price: 89999,
      productImage: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
      rating: 4.7
    },
    {
      id: 5,
      productName: "Wireless Earbuds",
      product: "True wireless earbuds with premium sound quality",
      price: 2999,
      productImage: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.5
    },
    {
      id: 6,
      productName: "Smart Home Speaker",
      product: "Voice-controlled smart speaker with premium audio",
      price: 3999,
      productImage: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      rating: 4.4
    },
    {
      id: 7,
      productName: "Fitness Tracker",
      product: "Advanced fitness tracker with heart rate monitoring",
      price: 2499,
      productImage: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      rating: 4.3
    },
    {
      id: 8,
      productName: "Portable Power Bank",
      product: "High-capacity power bank for all devices",
      price: 1499,
      productImage: "https://images.unsplash.com/photo-1609592425401-742074f0548d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      rating: 4.2
    }
  ];

  const addItem = (val) => {
    dispatch(add(val));
    toast.success(`${val.productName} added to cart!`, {
      duration: 2000,
      position: 'top-center',
    });
  };

  useEffect(() => {
    // Hero section animation
    gsap.from(".hero-content", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });

    // Services section animation
    gsap.from(servicesRef.current, {
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });

    // Best Products section animation
    gsap.from(bestProductsRef.current, {
      scrollTrigger: {
        trigger: bestProductsRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });

    // More Products section animation
    gsap.from(moreProductsRef.current, {
      scrollTrigger: {
        trigger: moreProductsRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });
  }, []);

  const services = [
    {
      icon: <FaTruck className="text-4xl text-blue-600" />,
      title: "Free Shipping",
      description: "Free shipping on all orders over ₹499",
    },
    {
      icon: <FaHeadset className="text-4xl text-blue-600" />,
      title: "24/7 Support",
      description: "Round the clock customer support",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-600" />,
      title: "Secure Payment",
      description: "100% secure payment processing",
    },
    {
      icon: <FaUndo className="text-4xl text-blue-600" />,
      title: "Easy Returns",
      description: "30 days return policy",
    },
  ];

  // Get best products (first 4)
  const bestProducts = sampleProducts.slice(0, 4);
  // Get more products (next 4)
  const moreProducts = sampleProducts.slice(4, 8);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div ref={heroRef} className="hero-content">
        <HeroSection />
      </div>

      {/* Services Section */}
      <div ref={servicesRef} className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We provide the best shopping experience with our premium services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-item bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-blue-50 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Best Products Section */}
      <div ref={bestProductsRef} className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Check out our latest and trending products
            </p>
          </div>

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
                      <span className="text-sm font-semibold">{product.rating}</span>
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
          </div>

          <div className="text-center mt-12">
            <NavLink
              to="/product"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              View More Products
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>

      {/* More Products Section */}
      <div ref={moreProductsRef} className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Check out our latest and trending products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {moreProducts.map((product) => (
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
                      <span className="text-sm font-semibold">{product.rating}</span>
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
          </div>

          <div className="text-center mt-12">
            <NavLink
              to="/product"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              View More Products
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">
                Your one-stop shop for all your needs. We provide quality products and excellent service.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><NavLink to="/" className="text-gray-400 hover:text-white">Home</NavLink></li>
                <li><NavLink to="/about" className="text-gray-400 hover:text-white">About</NavLink></li>
                <li><NavLink to="/product" className="text-gray-400 hover:text-white">Products</NavLink></li>
                <li><NavLink to="/contact" className="text-gray-400 hover:text-white">Contact</NavLink></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Shipping Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Return Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaTwitter className="text-2xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Subscribe to our newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-900"
                  />
                  <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Apni Dukaan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
