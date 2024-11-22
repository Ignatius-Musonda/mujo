import React from "react";
import "./Hero.css";

const Hero = ({ title, subtitle }) => {
  return (
    <div className="hero2">
      <h1 className="hero-title">{title}</h1>
      <p className="hero-subtitle">{subtitle}</p>
    </div>
  );
};

export default Hero;
