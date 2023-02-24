import React from "react";
import "../styles/shoeForm.style.css";
const ShoeForm = () => {
  return (
    <div>
      <form className="new-show-form">
        <label for="shoename">Shoe Brand Name:</label>
        <input type="text" id="shoename" name="shoename" required />
        <label for="shoeprice">Shoe Price:</label>
        <input
          type="number"
          min="1"
          step="any"
          id="shoeprice"
          name="shoeprice"
          required
        />
        <label for="shoeimg">Shoe Image Url:</label>
        <input type="text" id="shoeimg" name="shoeimg" required />
      </form>
    </div>
  );
};

export default ShoeForm;
