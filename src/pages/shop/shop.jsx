import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import Slider from "react-slick";
import "./shop.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../../components/CustomArrows";
import "../../components/CustomArrows.css"; 

import groceryImage from "../../assets/products/grocery.jpg";
import fashionImage from "../../assets/products/indian-fashion-brands-cover.png";
import electronicsImage from "../../assets/products/electronics.jpg";
import MobileImage from "../../assets/products/1.png";
import FootwearImage from "../../assets/products/foot.webp";

export const Shop = () => {
  const [sliderState, setSliderState] = useState({
    electronics: 0,
    mobiles: 0,
    fashion: 0,
    footwear: 0,
  });

  const categories = [
    { name: "Grocery", image: groceryImage, link: "/grocery" },
    { name: "Fashion", image: fashionImage , link: "/fashion" },
    { name: "Electronics", image: electronicsImage, link: "/electronics" },
    { name: "Mobiles", image: MobileImage, link: "/mobiles" },
    { name: "Footwear", image: FootwearImage, link: "/footwear" },
  ];

  const handleBeforeChange = (category, oldIndex, newIndex) => {
    setSliderState({ ...sliderState, [category]: newIndex });
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => handleBeforeChange("electronics", oldIndex, newIndex)
  };

  const renderProducts = (category) => {
    return PRODUCTS.filter(product => product.category === category).slice(0, 5).map((product) => (
      <div key={product.id}>
        <Product data={product} />
      </div>
    ));
  };

  return (
    <div className="shop">
      <div className="shopTitle">
        <div className="category-row">
          {categories.map((category) => (
            <div className="category" key={category.name}>
              <Link to={category.link || "#"}>
                <img src={category.image} alt={category.name} />
                <div className="category-name">{category.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="product-category left-align">
        <h2>Best of Electronics</h2>
        <Slider {...sliderSettings} beforeChange={(oldIndex, newIndex) => handleBeforeChange("electronics", oldIndex, newIndex)}>
          {renderProducts("electronics")}
        </Slider>
      </div>
      <div className="product-category center-align">
        <h2>Best of Mobiles</h2>
        <Slider {...sliderSettings} beforeChange={(oldIndex, newIndex) => handleBeforeChange("mobiles", oldIndex, newIndex)}>
          {renderProducts("mobiles")}
        </Slider>
      </div>
      <div className="product-category center-align">
        <h2>Best of Fashion</h2>
        <Slider {...sliderSettings} beforeChange={(oldIndex, newIndex) => handleBeforeChange("fashion", oldIndex, newIndex)}>
          {renderProducts("fashion")}
        </Slider>
      </div>
      <div className="product-category center-align">
        <h2>Best of Footwear</h2>
        <Slider {...sliderSettings} beforeChange={(oldIndex, newIndex) => handleBeforeChange("footwear", oldIndex, newIndex)}>
          {renderProducts("footwear")}
        </Slider>
      </div>
    </div>
  );
};
