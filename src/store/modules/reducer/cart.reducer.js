import produce from 'immer';
import { ADD_TO_CART_SUCCESS, UPDATE_CART_AMOUNT_SUCCESS } from '../actions/cart.actions'

export default function cart(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      return produce(state, draft => {
        const { product } = action;

        draft.push(product);
      });

    case 'CART_REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    case UPDATE_CART_AMOUNT_SUCCESS: {
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}