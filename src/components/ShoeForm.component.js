import React from "react";
import { Form } from "react-router-dom";

import "../styles/shoeForm.style.css";
const ShoeForm = ({ shoe, children }) => {
  return (
    <div className="form-container">
      <Form className="new-shoe-form" method="post">
        <label htmlFor="shoename">Brand Name:</label>
        <input
          type="text"
          id="shoename"
          name="shoename"
          required={true}
          defaultValue={shoe.name}
        />
        <label htmlFor="shoeprice">Price:</label>
        <input
          type="number"
          min="1"
          step="any"
          id="shoeprice"
          name="shoeprice"
          defaultValue={shoe.price}
          required
        />
        <label htmlFor="shoeimg">Image Url:</label>
        <input
          type="text"
          id="shoeimg"
          name="shoeimg"
          required
          defaultValue={shoe.image}
        />
        {children}
      </Form>
    </div>
  );
};

export default ShoeForm;
