import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/productcontext.jsx";
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
    <Toaster position="top-center" reverseOrder={false} />
  </AppProvider>
);
