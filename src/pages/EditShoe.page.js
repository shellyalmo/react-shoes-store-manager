import React from "react";
import ShoeForm from "../components/ShoeForm.component";
import Navbar from "../components/Navbar.component";
import { useParams } from "react-router-dom";

const EditShoe = () => {
  let { shoeid } = useParams();
  return (
    <div>
      <Navbar />
      EditShoe
      {shoeid}
      <ShoeForm />
    </div>
  );
};

export default EditShoe;
