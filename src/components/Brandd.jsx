import React from "react";
import "../components/Brandd.css";

import kfc from "../assets/kfc.jpg";
import coffee from "../assets/coffee.jpg";
import dominos from "../assets/dominos.png";
import donald from "../assets/donald.jpg";
import king from "../assets/king.png";
import korean from "../assets/korean.jpg";
import pepsi from "../assets/pepsi.jpg";
import rimfood from "../assets/rimfood.jpg";
import naturalfood from "../assets/naturalfood.png";
import menu from "../assets/menu.jpg";
import indianfood from "../assets/indianfood.png";
import fauget from "../assets/fauget.jpg";
import fastfood from "../assets/fastfood.jpg";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Brand() {
  const scrollLeft = () => {
    document.getElementById("brandScroll").scrollLeft -= 300;
  };

  const scrollRight = () => {
    document.getElementById("brandScroll").scrollLeft += 300;
  };

  const brands = [
    kfc, coffee, dominos, donald, king, korean, pepsi,
    fastfood, fauget, indianfood, menu, naturalfood, rimfood
  ];

  return (
    <div className="brand-section">
      <h1 className="brand-title">Top Brands For You</h1>

      <button className="brand-arrow left-arrow" onClick={scrollLeft}>
        <FiChevronLeft size={25} />
      </button>

      <div className="brand-container" id="brandScroll">
        {brands.map((brand, i) => (
          <img key={i} src={brand} className="brand-logo" alt="brand" />
        ))}
      </div>

      <button className="brand-arrow right-arrow" onClick={scrollRight}>
        <FiChevronRight size={25} />
      </button>
    </div>
  );
}

export default Brand;
