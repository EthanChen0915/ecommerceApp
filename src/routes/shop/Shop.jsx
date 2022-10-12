import React, { Fragment } from "react";
import { useContext } from "react";
import ProductCard from "../../component/ProductCard/ProductCard";
import { CategoriesContext } from "../../context/categoriesContext";

import "./Shop.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map((category) => (
              <ProductCard key={category.id} product={category}></ProductCard>
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
