import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <li>
            <Link className="hvr-underline-from-left" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/popular" className="hvr-underline-from-left">
              Popular Meals
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hvr-underline-from-left">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
