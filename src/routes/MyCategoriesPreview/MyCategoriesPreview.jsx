import React, { Fragment } from "react";
import { useContext } from "react";
import CategoryPreview from "../../component/CategoryPreview/CategoryPreview";
import { CategoriesContext } from "../../context/categoriesContext";

const MyCategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={products}
          ></CategoryPreview>
        );
      })}
    </Fragment>
  );
};

export default MyCategoriesPreview;
