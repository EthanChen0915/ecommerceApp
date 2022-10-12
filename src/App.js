import Home from "./routes/home/home.jsx";
import { Outlet, Route, Routes } from "react-router-dom";
import React from "react";
import Navigation from "./navigation/navigation.js";

import Authentication from "./routes/authentication/Authentication.jsx";
import { UserContext } from "./context/context.jsx";
import { useContext } from "react";
import Shop from "./routes/shop/Shop.jsx";
import Checkout from "./routes/checkout/Checkout.jsx";

const App = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        {currentUser ? (
          <Route path="auth" element={<Home />} />
        ) : (
          <Route path="auth" element={<Authentication />} />
        )}
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
