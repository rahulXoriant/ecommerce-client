// add to cart actions
export const GET_CATEGORIES_PENDING = 'GET_CATEGORIES_PENDING';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_REJECTED = 'GET_CATEGORIES_REJECTED';

export const getCategoriesPending = () => {
  return {
    type: GET_CATEGORIES_PENDING,
    payload: { value: null, loading: false }
  };
}

export const getCategoriesSuccess = (categories) => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload: { value: categories, loading: false },
  };
}

export const getCategoriesRejected = (message) => {
  return {
    type: GET_CATEGORIES_REJECTED,
    payload: { value: null, message: message, loading: false },
  };
}

