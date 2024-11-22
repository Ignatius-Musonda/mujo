import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";  // Import useLocation to detect current route
import img1 from "../Images/MujosLogoBlack.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();  // Hook to track the current location

  // Function to add active class based on current route
  const getLinkClass = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        {/* Clicking the logo leads to the home page */}
        <Link to="/">
          <img src={img1} alt="Mujos school" />
        </Link>
      </div>
      <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link className={getLinkClass("/about")} to="/about">About Us</Link>
        <Link className={getLinkClass("/gallery")} to="/gallery">Gallery</Link>
        <Link className={getLinkClass("/admission")} to="/admission">Admissions</Link>
        <Link className={getLinkClass("/contact")} to="/contact">Contact</Link>
        <Link className="navbar-cta" to="/admission">Apply Now</Link>
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


// import React, { useState } from "react";
// import img1 from "../Images/mujos1.png"
// import "./Navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="navbar">
//       <div className="navbar-logo">
//         <img src={img1} alt="Mujos school" />
//       </div>
//       <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
//         <a href="#about">About Us</a>
//         <a href="#programs">Programs</a>
//         <a href="#admissions">Admissions</a>
//         <a href="#contact">Contact</a>
//         <a className="navbar-cta" href="#apply">Apply Now</a>
//       </nav>
//       <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
