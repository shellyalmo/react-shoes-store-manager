import React from "react";
import Navbar from "../components/Navbar.component";
import storeLogo from "../assets/shoes-logo.jpg";
import "../styles/homepage.style.css";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="background-container">
        <img className="background-img" src={storeLogo} alt="" />
        <h3>Welcome to the Shoes Store Manager.</h3>{" "}
        <p>
          {" "}
          The online platform for store managers to view their shoes inventory,
          edit shoes information and add new shoes.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
