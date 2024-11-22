import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Welcome to MUJO'S SKY LIMIT SCHOOL</h1>
        <p>Revolutionizing the way we learn.</p>
        <a href="/admission" className="hero-cta">Apply now</a>
      </div>
    </section>
  );
};

export default HeroSection;
