import { useDispatch } from 'react-redux';


// add to cart actions
export const GET_CATEGORIES_PENDING = 'GET_CATEGORIES_PENDING';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_REJECTED = 'GET_CATEGORIES_REJECTED';

const dispatch = useDispatch();

export function getCategoriesPending() {
  return {
    type: GET_CATEGORIES_PENDING,
  };
}

export function getCategoriesSuccess(category) {
  return {
    type: GET_CATEGORIES_SUCCESS,
    category,
  };
}

export function getCategoriesRejected(message) {
  return {
    type: GET_CATEGORIES_REJECTED,
    message,
  };
}

