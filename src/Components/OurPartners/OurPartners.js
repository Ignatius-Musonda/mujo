import React from "react";
import "./OurPartners.css";
import img1 from "../Images/MOE.png"
import img2 from "../Images/ASBIRO.jpg"
import img3 from "../Images/isazLogo.png"

const partners = [
 
  { name: "Ministry of Education", logo: img1 },
  { name: "ASBIRO foundation", logo: img2 },
  { name: "ISAZ", logo: img3 },
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
                //src={img1}
               src={partner.logo}
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
