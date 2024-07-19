import React from "react";
import { PRODUCTS } from "../products";
import { Product } from "../pages/shop/product";
import "../pages/shop/shop.css";

const Mobiles = () => {
  const mobilesProducts = PRODUCTS.filter(product => product.category === "mobiles");

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Mobiles Products</h1>
      </div>
      <div className="products">
        {mobilesProducts.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Mobiles;
