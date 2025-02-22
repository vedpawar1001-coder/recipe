import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/home" className="logo">Recipe App</Link> {/* Change the tag name */}
      <ul className="nav-links">
        <li>
          <Link to="/login" className="nav-button">Login</Link>
        </li>
        <li>
          <Link to="/signup" className="nav-button">Signup</Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
