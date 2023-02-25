import axios from "axios";
import { redirect } from "react-router-dom";

export const createShoe = async ({ request }) => {
  try {
    let formData = await request.formData();
    let shoeName = formData.get("shoename");
    let shoePrice = +formData.get("shoeprice");
    let shoeImg = formData.get("shoeimg");
    if (
      typeof shoeName !== "string" ||
      typeof shoePrice !== "number" ||
      typeof shoeImg !== "string"
    ) {
      throw new Error("invalid shoe data");
    }
    const data = JSON.stringify({
      name: shoeName,
      price: shoePrice,
      image: shoeImg,
    });

    const config = {
      method: "post",
      url: "https://63f658b1ab76703b15bdb686.mockapi.io/shoes",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios(config);
    return redirect(`/shoes`);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const readShoesList = async () => {
  try {
    const config = {
      method: "get",
      headers: {},
    };

    const response = await fetch(
      "https://63f658b1ab76703b15bdb686.mockapi.io/shoes",
      config
    );
    const json = await response.json();
    if (json instanceof Array) {
      return { shoes: json };
    } else {
      throw new Error("not arr!");
    }
  } catch (error) {
    console.log(error);
    return { shoes: [] };
  }
};

export const updateShoe = async ({ request, params }) => {
  try {
    let formData = await request.formData();
    let shoeName = formData.get("shoename");
    let shoePrice = +formData.get("shoeprice");
    let shoeImg = formData.get("shoeimg");
    if (
      typeof shoeName !== "string" ||
      typeof shoePrice !== "number" ||
      typeof shoeImg !== "string"
    ) {
      throw new Error("invalid shoe data");
    }
    const data = JSON.stringify({
      name: shoeName,
      price: shoePrice,
      image: shoeImg,
    });

    const config = {
      method: "put",
      url: `https://63f658b1ab76703b15bdb686.mockapi.io/shoes/${params.shoeid}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios(config);
    return redirect(`/shoes`);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteShoe = async (shoeid) => {
  try {
    const config = {
      method: "delete",
      url: `https://63f658b1ab76703b15bdb686.mockapi.io/shoes/${shoeid}`,
      headers: {},
    };

    await axios(config);
  } catch (error) {
    console.log(error);
  }
};
