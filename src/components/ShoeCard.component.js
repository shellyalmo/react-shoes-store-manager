import React from "react";
import "../styles/shoeCard.style.css";
import { Link } from "react-router-dom";

const ShoeCard = ({ id, name, price, image, loading }) => {
  return (
    <div className="shoe-card">
      {!loading ? (
        <Link to={`/${id}`}>
          <div>
            id:{id}
            <h3>{name}</h3>
            <p>${price}</p>
            <img className="shoe-img" src={image} alt="" />
          </div>
        </Link>
      ) : (
        <div className="spinner">Loading</div>
      )}
    </div>
  );
};

export default ShoeCard;
