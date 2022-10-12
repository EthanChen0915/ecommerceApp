import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "../category/Category";

import MyCategoriesPreview from "../MyCategoriesPreview/MyCategoriesPreview";

import "./Shop.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<MyCategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
