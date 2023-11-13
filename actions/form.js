/* eslint-disable prettier/prettier */

export const formArray = [
  {
    lable: '',
    placeholder: '',
    onchange: '',
  },
];
export const userLogin = async (email, password) => {
  try {
    const response = await fetch(
      'https://ecommerce-api-ruby.vercel.app/api/auth/login',
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      },
    )
      .then(res => res.json())
      .then(data => {
        return data;
      });
    // console.log(response, 'Login');

    return response;
  } catch (error) {
    console.log(error);
  }
};
export const RegisterUser = async (email, password) => {
  try {
    const response = await fetch(
      'https://ecommerce-api-ruby.vercel.app/api/auth/register',
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          userType: 'user',
          uname: 'test',
          email,
          password,
        }),
      },
    ).then(res => res.json());
    //   .then(data => {
    //     return data;
    //   });
    console.log(response, 'Register');
    return response;
  } catch (error) {
    console.log(error);
  }
};
