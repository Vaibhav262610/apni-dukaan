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
import { Provider } from "react-redux";
import store from "./store/store";
import CartLogo from "./components/CartLogo";
import PlacedOrder from "./components/PlacedOrder";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
import AdminPage from "./components/AdminPage";

function App() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
      </style>
      <Provider store={store}>
        <Router>
          <Navbar />
          <CartLogo />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/placeorder" element={<PlacedOrder />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admin" element={<AdminPage/>} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
