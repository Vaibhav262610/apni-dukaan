import { createContext, useContext, useEffect } from "react";
// import {axios} from "axios";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {
//   const getProducts = async (url) => {
//     const res = await axios.get(url);
//     const products = await res.data; 
//   };

//   useEffect(() => {
//     getProducts(API);
//   }, []);
  return <AppContext.Provider value="ZORO">{children}</AppContext.Provider>;
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
