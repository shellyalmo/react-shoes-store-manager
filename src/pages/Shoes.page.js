import React from "react";
import Navbar from "../components/Navbar.component";
import ShoeCard from "../components/ShoeCard.component";
import { useLoaderData } from "react-router-dom";
import "../styles/shoespage.style.css";
import "../styles/spinner.css";

const Shoes = () => {
  const { shoes } = useLoaderData();

  return (
    <>
      <Navbar />

      <h2>All Shoes</h2>

      <section>
        {shoes instanceof Array ? (
          shoes.map((shoe) => {
            return (
              <ShoeCard
                key={shoe.id}
                id={shoe.id}
                name={shoe.name}
                price={shoe.price}
                image={shoe.image}
                loading={false}
              />
            );
          })
        ) : (
          <ShoeCard loading={true} />
        )}
      </section>
    </>
  );
};

export default Shoes;
