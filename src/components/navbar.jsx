import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, MagnifyingGlass } from "phosphor-react";
import { ShopContext } from "../context/shop-context";
import "./navbar.css";

export const Navbar = () => {
  const { getTotalItemCount } = useContext(ShopContext);
  const totalItemCount = getTotalItemCount();

  return (
    <div className="navbar">
      <div className="brand">
        <div className="brand-line1">Product<br></br>
         Catalog</div>
      </div>
      <div className="search-bar">
        <MagnifyingGlass size={20} className="search-icon" />
        <input type="text" placeholder="Search for products" />
      </div>
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart" className="cart-icon">
          <ShoppingCart size={32} />
          {totalItemCount > 0 && (
            <span className="cart-count">{totalItemCount}</span>
          )}
        </Link>
      </div>
    </div>
  );
};
