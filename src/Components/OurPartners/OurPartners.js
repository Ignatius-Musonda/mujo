import React from "react";
import "./OurPartners.css";
import img1 from "../Images/img1.jpg"

const partners = [
  { name: "Partner 1", logo: "/images/partner1-logo.jpg" }, // Replace with actual paths
  { name: "Partner 2", logo: "/images/partner2-logo.jpg" },
  { name: "Partner 3", logo: "/images/partner3-logo.jpg" },
  { name: "Partner 4", logo: "/images/partner4-logo.jpg" },
];

const OurPartners = () => {
  return (
    <section className="our-partners">
      <div className="partners-container">
        <h2 className="partners-title">Our Partners</h2>
        <p className="partners-description">
          We are proud to collaborate with organizations that share our vision of empowering children and families. Together, we make a lasting impact.
        </p>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div className="partner-card" key={index}>
              <img
                src={img1}
               // src={partner.logo}
                alt={partner.name}
                className="partner-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
