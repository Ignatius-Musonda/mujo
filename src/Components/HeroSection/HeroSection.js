import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Welcome to Khan Lab School</h1>
        <p>Revolutionizing the way we learn.</p>
        <a href="#learn-more" className="hero-cta">Learn More</a>
      </div>
    </section>
  );
};

export default HeroSection;
