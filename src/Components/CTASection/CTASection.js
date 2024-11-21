import React from "react";
import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <a href="#visit" className="cta-card">
          <h3>Visit</h3>
          <p>Plan a visit to our school and explore the community.</p>
        </a>
        <a href="#learn-more" className="cta-card">
          <h3>Learn More</h3>
          <p>Discover our innovative programs and philosophy.</p>
        </a>
        <a href="#donate" className="cta-card">
          <h3>Donate</h3>
          <p>Support our mission and contribute to the future of learning.</p>
        </a>
        <a href="#explore" className="cta-card">
          <h3>Explore</h3>
          <p>Dive deeper into the Khan Lab School experience.</p>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
