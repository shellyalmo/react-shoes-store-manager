import React from "react";
import Navbar from "../components/Navbar.component";
import ShoeCard from "../components/ShoeCard.component";
import { useLoaderData } from "react-router-dom";
import "../styles/shoespage.style.css";
import "../styles/spinner.css";
const Shoes = () => {
  const { shoes } = useLoaderData();

  return (
    <div>
      <Navbar />
      <div className="shoes-container">
        {shoes instanceof Array ? (
          shoes.map((shoe) => {
            return (
              <ShoeCard
                key={shoe.id}
                id={shoe.id}
                name={shoe.name}
                price={shoe.price}
                image={shoe.image}
              />
            );
          })
        ) : (
          <ShoeCard loading={true} />
        )}
      </div>
    </div>
  );
};

export default Shoes;
