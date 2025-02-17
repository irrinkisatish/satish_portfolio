import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets"; // Adjust based on your project structure
import "./index.css";

const Navbar = () => {
  // Function to close menu when a link is clicked
  const closeMenu = () => {
    document.getElementById("check").checked = false;
  };

  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <img src={assets.logo} className="logo" alt="Logo" />
      <ul className="Navbar-ui">
        <li>
          <Link to="/" onClick={closeMenu}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/portfolio" onClick={closeMenu}>
            PROJECTS
          </Link>
        </li>
        <li>
          <Link to="/testimonials" onClick={closeMenu}>
            TESTIMONIALS
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
