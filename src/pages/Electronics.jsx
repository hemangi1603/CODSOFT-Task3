import React from "react";
import { PRODUCTS } from "../products";
import { Product } from "../pages/shop/product";
import "../pages/shop/shop.css";

const Electronics = () => {
  const electronicsProducts = PRODUCTS.filter(product => product.category === "electronics");

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Electronics Products</h1>
      </div>
      <div className="products">
        {electronicsProducts.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Electronics;
