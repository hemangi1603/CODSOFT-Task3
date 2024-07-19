import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PRODUCTS } from "../products";
import { Product } from "../pages/shop/product";
import "../pages/shop/shop.css";
import MenImage from "../assets/products/Men.jpg";
import WomenImage from "../assets/products/Women.jpg";

const Footwear = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedType = queryParams.get("type");

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let footwearProducts = PRODUCTS.filter(product => product.category === "footwear");
    if (selectedType) {
      footwearProducts = footwearProducts.filter(product => product.type === selectedType);
    }
    setFilteredProducts(footwearProducts);
  }, [selectedType]);

  return (
    <div className="shop">
      <div className="shopTitle">
      </div>

      <div className="categoryRow">
        <div className="categoryItem">
          <Link to="/footwear?type=men">
            <img src={MenImage} alt="Male" className="categoryImage" />
            <p>Men</p>
          </Link>
        </div>
        <div className="categoryItem">
          <Link to="/footwear?type=women">
            <img src={WomenImage} alt="Female" className="categoryImage" />
            <p>Women</p>
          </Link>
        </div>
      </div>

      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product.id} data={product} />
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Footwear;
