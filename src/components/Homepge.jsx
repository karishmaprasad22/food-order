// src/components/Homepge.jsx
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiSearch } from "react-icons/fi";
import "../components/Homepge.css";

import briyani from "../assets/briyani.jpg";
import veg from "../assets/veg.jpg";
import noodles from "../assets/noodles.jpg";
import cake from "../assets/cake.jpg";
import noth from "../assets/noth.jpg";
import pizza from "../assets/pzza.jpg";
import dosa from "../assets/dosa.jpg";
import burger from "../assets/burger.jpg";
import paratha from "../assets/paratha.jpg";
import chicken from "../assets/chicken.jpg";
import fried from "../assets/fried.jpg";

import Banner from "./Banner";
import Brandd from "./Brandd";
import Foodlist from "./Foodlist";

function Homepge() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollLeft = () => {
    const container = document.getElementById("scrollImages");
    if (container) container.scrollLeft -= container.offsetWidth / 2;
  };

  const scrollRight = () => {
    const container = document.getElementById("scrollImages");
    if (container) container.scrollLeft += container.offsetWidth / 2;
  };

  return (
    <>
      <div className="slider-container">
        <h1 className="section-title">Inspiration For Your First Order</h1>

        <button className="arrow left-arrow" onClick={scrollLeft}>
          <FiChevronLeft size={20} />
        </button>

        <div className="foodimages" id="scrollImages">
          {[
            { img: briyani, name: "Briyani" },
            { img: veg, name: "Veg Meals" },
            { img: noodles, name: "Noodles" },
            { img: cake, name: "Cake" },
            { img: noth, name: "North Indian" },
            { img: pizza, name: "Pizza" },
            { img: dosa, name: "Dosa" },
            { img: burger, name: "Burger" },
            { img: paratha, name: "Paratha" },
            { img: chicken, name: "Chicken" },
            { img: fried, name: "French Fries" },
          ].map((item, index) => (
            <div className="img-card" key={index}>
              <img src={item.img} className="circle-img" alt={item.name} />
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>

        <button className="arrow right-arrow" onClick={scrollRight}>
          <FiChevronRight size={20} />
        </button>
      </div>

      <Banner />
      <Brandd />
      <Foodlist />
    </>
  );
}

export default Homepge;
