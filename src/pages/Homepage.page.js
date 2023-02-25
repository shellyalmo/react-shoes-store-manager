import React from "react";
import { useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar.component";
import storeLogo from "../assets/shoes-logo.jpg";
import "../styles/homepage.style.css";
import "../styles/spinner.css";

const Homepage = () => {
  const navigation = useNavigation();

  return navigation.state === "loading" ? (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="spinner"></div>
    </div>
  ) : (
    <div>
      <Navbar />
      <div className="background-container">
        <header>
          <h3>Welcome to the Shoes Store Manager.</h3>{" "}
        </header>
        <figure>
          <img className="background-img" src={storeLogo} alt="" />
        </figure>
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
