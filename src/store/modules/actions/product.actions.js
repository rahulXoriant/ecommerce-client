// add to cart actions
export const GET_PRODUCTS_PENDING = "GET_PRODUCTS_PENDING";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_REJECTED = "GET_PRODUCTS_REJECTED";

export const getProductsPending = filter => {
  return {
    type: GET_PRODUCTS_PENDING,
    filter,
    payload: { value: null, loading: false },
  };
};

export const getProductsSuccess = products => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: { value: products, loading: false },
  };
};

export const getProductsRejected = message => {
  return {
    type: GET_PRODUCTS_REJECTED,
    payload: { value: null, message: message, loading: false },
  };
};
