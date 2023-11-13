/* eslint-disable prettier/prettier */

export const getAllProducts = async () => {
  try {
    const response = await fetch(
      'https://ecommerce-api-ruby.vercel.app/api/products',
      {
        method: 'GET',
        'content-type': 'application/json',
      },
    )
      .then(res => res.json())
      .then(data => {
        return data;
      });
    // console.log(response, 'GET');
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const addtocart = async data => {
  try {
    const response = await fetch(
      'https://ecommerce-api-ruby.vercel.app/api/products/addToCart',
      {
        method: 'POST',
        'content-type': 'application/json',
        body: JSON.stringify(data),
      },
    ).then(res => res.json());
    console.log(response, 'POST CART');
  } catch (error) {
    console.log(error);
  }
};

export const getCart = async id => {
  try {
    const response = await fetch(
      `https://ecommerce-api-ruby.vercel.app/api/products/cart/${id}`,
      {
        method: 'GET',
        'content-type': 'application/json',
      },
    )
      .then(res => res.json())
      .then(data => {
        return data;
      });
    console.log(response, 'GET CART');
    return response;
  } catch (error) {
    console.log(error);
  }
};
