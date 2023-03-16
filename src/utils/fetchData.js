// FETCH DATA
export const fetchData = async function (address) {
  const response = await fetch(address);
  const responseData = await response.json();
  return responseData;
};

// FETCHING USER
export const fetchUser = async function (address, userId) {
  const response = await fetch(address);
  const responseData = await response.json();
  const userData = responseData.filter(userId);

  return userData;
};

// FETCHING PRODUCTS
export const fetchProducts = async function (address) {
  const response = await fetch(address);
  const responseData = await response.json();
  const [products] = Object.values(responseData);
  return products;
};
