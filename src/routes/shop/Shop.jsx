import React from "react";
import { useContext } from "react";
import ProductCard from "../../component/ProductCard/ProductCard";
import { ProductContext } from "../../context/productcontext";
import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
