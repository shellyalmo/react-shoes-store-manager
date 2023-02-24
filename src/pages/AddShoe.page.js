import React from "react";
import Navbar from "../components/Navbar.component";
import ShoeForm from "../components/ShoeForm.component";

const AddShoe = () => {
  return (
    <div>
      <Navbar />
      <h2>Add a new shoe</h2>
      <ShoeForm>
        <button className="add-shoe-btn" type="submit">
          Add
        </button>
      </ShoeForm>
    </div>
  );
};

export default AddShoe;
