import Home from "./routes/home/home.jsx";
import { Outlet, Route, Routes } from "react-router-dom";
import React from "react";
import Navigation from "./navigation/navigation.js";
import Signin from "./routes/signin/Signin.jsx";

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
        <Route path="Shop" element={<Shop />} />
        <Route path="signin" element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default App;
