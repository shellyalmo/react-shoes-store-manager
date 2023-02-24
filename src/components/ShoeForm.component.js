import React from "react";
import { Form } from "react-router-dom";

import "../styles/shoeForm.style.css";
const ShoeForm = (props) => {
  return (
    <div className="form-container">
      <Form className="new-shoe-form" method="post">
        <label htmlFor="shoename">Brand Name:</label>
        <input type="text" id="shoename" name="shoename" required={true} />
        <label htmlFor="shoeprice">Price:</label>
        <input
          type="number"
          min="1"
          step="any"
          id="shoeprice"
          name="shoeprice"
          required
        />
        <label htmlFor="shoeimg">Image Url:</label>
        <input type="text" id="shoeimg" name="shoeimg" required />
        {props.children}
      </Form>
    </div>
  );
};

export default ShoeForm;
