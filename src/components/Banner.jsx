import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Banner.css";

import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import banner5 from "../assets/banner5.jpg";
import banner6 from "../assets/banner6.jpg";
import banner7 from "../assets/banner7.jpg";

const images = [banner1, banner2, banner3, banner4, banner5, banner6, banner7];

function Banner() {
  const [index, setIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className="banner-wrapper">
      {/* Slide Container */}
      <div
        className="banner-slider"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img key={i} src={img} className="banner-img" alt="banner" />
        ))}
      </div>

      {/* Left Arrow */}
      <button className="banner-arrow left" onClick={prevSlide}>
        <FiChevronLeft size={30} />
      </button>

      {/* Right Arrow */}
      <button className="banner-arrow right" onClick={nextSlide}>
        <FiChevronRight size={30} />
      </button>

      {/* Slider Dots */}
      <div className="banner-dots">
        {images.map((_, i) => (
          <div key={i} className={`dot ${index === i ? "active" : ""}`} />
        ))}
      </div>
    </div>
  );
}

export default Banner;
