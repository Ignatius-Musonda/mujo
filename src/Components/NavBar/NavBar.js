import React, { useState } from "react";
import img1 from "../Images/mujos1.png"
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={img1} alt="Mujos school" />
      </div>
      <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <a href="#about">About Us</a>
        <a href="#programs">Programs</a>
        <a href="#admissions">Admissions</a>
        <a href="#contact">Contact</a>
        <a className="navbar-cta" href="#apply">Apply Now</a>
      </nav>
      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
