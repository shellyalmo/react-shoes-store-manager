import React from "react";
import "../styles/shoeForm.style.css";
const ShoeForm = () => {
  return (
    <div className="form-container">
      <form className="new-shoe-form">
        <label for="shoename">Brand Name:</label>
        <input type="text" id="shoename" name="shoename" required />
        <label for="shoeprice">Price:</label>
        <input
          type="number"
          min="1"
          step="any"
          id="shoeprice"
          name="shoeprice"
          required
        />
        <label for="shoeimg">Image Url:</label>
        <input type="text" id="shoeimg" name="shoeimg" required />
      </form>
    </div>
  );
};

export default ShoeForm;
