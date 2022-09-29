import Home from "./routes/home/home.jsx";
import { Outlet, Route, Routes } from "react-router-dom";
import React from "react";
import Navigation from "./navigation/navigation.js";

import Authentication from "./routes/authentication/Authentication.jsx";

const Shop = () => {
  return (
    <div>
      <div>im am shop</div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
