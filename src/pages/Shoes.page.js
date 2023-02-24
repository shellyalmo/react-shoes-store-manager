import React from "react";
import Navbar from "../components/Navbar.component";
import ShoeCard from "../components/ShoeCard.component";
import "../styles/shoespage.style.css";
import "../styles/spinner.css";
const Shoes = () => {
  const shoeName = "Adidas";
  const shoePrice = 299.99;
  const shoeImage =
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
  return (
    <div>
      <Navbar />
      <div className="shoes-container">
        <ShoeCard id={1} name={shoeName} price={shoePrice} image={shoeImage} />
        <ShoeCard id={2} name={shoeName} price={shoePrice} image={shoeImage} />
        <ShoeCard loading={true} />
        <ShoeCard id={3} name={shoeName} price={shoePrice} image={shoeImage} />
      </div>
    </div>
  );
};

export default Shoes;
