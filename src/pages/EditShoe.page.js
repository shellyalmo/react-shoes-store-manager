import React from "react";
import ShoeForm from "../components/ShoeForm.component";
import Navbar from "../components/Navbar.component";
import { useParams } from "react-router-dom";

const EditShoe = () => {
  let { shoeid } = useParams();
  return (
    <div>
      <Navbar />
      <h2>Edit Shoe {shoeid}</h2>
      <ShoeForm>
        <button className="update-shoe-btn" type="submit">
          Update Shoe
        </button>
        <button className="cancel-shoe-btn" type="submit">
          Cancel
        </button>
        <button className="delete-shoe-btn" type="submit">
          Delete Shoe
        </button>
      </ShoeForm>
    </div>
  );
};

export default EditShoe;
