import React from "react";
import "../styles/navbar.style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Homepage</Link>{" "}
        </li>
        <li>
          <Link to="/shoes">All Shoes</Link>
        </li>
        <li>
          <Link to="/shoes/add">Add Shoe</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
