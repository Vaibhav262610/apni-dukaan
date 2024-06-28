import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Product from "./components/Product";
import SingleProduct from "./components/SingleProduct";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Darkmode from "./components/Darkmode";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
      </style>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
          <Darkmode className={`${darkMode && "dark"}`} onClick={toggleMode} />
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
