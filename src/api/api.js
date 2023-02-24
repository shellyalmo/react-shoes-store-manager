import axios from "axios";

export const createAPI = async (shoeName, shoePrice, shoeImg) => {
  try {
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

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const readAPI = async () => {
  try {
    const config = {
      method: "get",
      url: "https://63f658b1ab76703b15bdb686.mockapi.io/shoes",
      headers: {},
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateAPI = async (shoeId, taskStatus) => {
  try {
    const data = JSON.stringify({
      complete: taskStatus,
    });

    const config = {
      method: "put",
      url: `https://63f658b1ab76703b15bdb686.mockapi.io/shoes/${shoeId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAPI = async (shoeId) => {
  try {
    const config = {
      method: "delete",
      url: `https://63f658b1ab76703b15bdb686.mockapi.io/shoes/${shoeId}`,
      headers: {},
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
