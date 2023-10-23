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
