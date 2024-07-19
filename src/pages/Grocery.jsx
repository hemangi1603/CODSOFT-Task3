import React from "react";
import { PRODUCTS } from "../products"; 
import { Product } from "../pages/shop/product";
import "../pages/shop/shop.css"; 

const Grocery = () => {
  const groceryProducts = PRODUCTS.filter(product => product.category === "grocery");

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Grocery Products</h1>
      </div>
      <div className="products">
        {groceryProducts.length > 0 ? (
          groceryProducts.map((product) => (
            <Product key={product.id} data={product} />
          ))
        ) : (
          <p>No grocery products available.</p>
        )}
      </div>
    </div>
  );
};

export default Grocery;
