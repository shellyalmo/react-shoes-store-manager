import React from "react";
import ShoeForm from "../components/ShoeForm.component";
import Navbar from "../components/Navbar.component";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { deleteShoe } from "../api/api";

const EditShoe = () => {
  const { shoeid } = useParams();
  const { shoes } = useLoaderData();
  const navigate = useNavigate();
  const shoe = shoes.find((shoe) => shoe.id === shoeid);
  return (
    <div>
      <Navbar />
      <h2>Edit Shoe {shoeid}</h2>

      <ShoeForm shoe={shoe}>
        <button className="update-shoe-btn" type="submit">
          Update Shoe
        </button>
        <button
          className="cancel-shoe-btn"
          onClick={() => navigate("/shoes")}
          type="button"
        >
          Cancel
        </button>
        <button
          className="delete-shoe-btn"
          type="button"
          onClick={async () => {
            await deleteShoe(shoeid);
            navigate("/shoes");
          }}
        >
          Delete Shoe
        </button>
      </ShoeForm>
    </div>
  );
};

export default EditShoe;
