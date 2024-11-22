import React from "react";
import "./Section.css";

const Section = ({ title, content, buttonText, buttonLink }) => {
  return (
    <div className="section">
      <h2>{title}</h2>
      <p>{content}</p>
      {buttonText && buttonLink && (
        <a href={buttonLink} className="section-button">
          {buttonText}
        </a>
      )}
    </div>
  );
};

export default Section;
