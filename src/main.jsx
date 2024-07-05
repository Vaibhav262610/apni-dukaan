import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/productcontext.jsx";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-lzdx441cgramva51.us.auth0.com"
    clientId="3dOavJHwM06EqrkwFAGmehb7IuK5auzR"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <AppProvider>
      <App />
    </AppProvider>
  </Auth0Provider>
);
