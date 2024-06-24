import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import SingleProduct from "./components/SingleProduct";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<ErrorPage />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
