// add to cart actions
export const ADD_TO_CART_PENDING = 'ADD_TO_CART_PENDING';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_REJECTED = 'ADD_TO_CART_REJECTED';

export function addToCartPending(id) {
  return {
    type: ADD_TO_CART_PENDING,
    payload: { id },
  };
}

export function addToCartSuccess(product) {
  return {
    type: ADD_TO_CART_SUCCESS,
    product,
  };
}

export function addToCartRejected(message) {
  return {
    type: ADD_TO_CART_REJECTED,
    message,
  };
}

export function removeFromCart(id) {
  return { type: 'CART_REMOVE', id };
}

// update to cart actions
export const UPDATE_CART_AMOUNT_PENDING = 'UPDATE_CART_AMOUNT_PENDING';
export const UPDATE_CART_AMOUNT_SUCCESS = 'UPDATE_CART_AMOUNT_SUCCESS';
export const UPDATE_CART_AMOUNT_REJECTED = 'UPDATE_CART_AMOUNT_REJECTED';

export function updateAmountPending(id, amount) {
  return { type: UPDATE_CART_AMOUNT_PENDING, id, amount };
}

export function updateAmountSuccess(id, amount) {
  return { type: UPDATE_CART_AMOUNT_SUCCESS, id, amount };
}
