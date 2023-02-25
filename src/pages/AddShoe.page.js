import React from "react";
import Navbar from "../components/Navbar.component";
import ShoeForm from "../components/ShoeForm.component";
import { useNavigation } from "react-router-dom";
import "../styles/spinner.css";

const AddShoe = () => {
  const navigation = useNavigation();

  return navigation.state === "loading" ? (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="spinner"></div>
    </div>
  ) : (
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
