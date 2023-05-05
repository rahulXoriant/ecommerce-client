import produce from "immer";
import { isEmpty } from "lodash";

import {
  ADD_TO_CART_SUCCESS,
  CART_REMOVE,
  UPDATE_CART_AMOUNT_SUCCESS
} from "../actions/cart.actions";

const cartFromLocalStorage = localStorage.getItem("cart");
const defaultCartStateValue = isEmpty(cartFromLocalStorage) ? [] : JSON.parse(cartFromLocalStorage);

const cart = (state = defaultCartStateValue, action) => {
  switch (action.type) {
  case ADD_TO_CART_SUCCESS:
    return produce(state, (draft) => {
      const { product } = action;
      draft.push(product);
      localStorage.setItem("cart", JSON.stringify(draft));
    });

  case CART_REMOVE:
    return produce(state, (draft) => {
      const productIndex = draft.findIndex((p) => p.id === action.id);
      if (productIndex >= 0) {
        draft.splice(productIndex, 1);
      }
      localStorage.setItem("cart", JSON.stringify(draft));
    });

  case UPDATE_CART_AMOUNT_SUCCESS: {
    return produce(state, (draft) => {
      const productIndex = draft.findIndex((p) => p.id === action.id);
      if (productIndex >= 0) {
        draft[productIndex].amount = Number(action.amount);
      }
      localStorage.setItem("cart", JSON.stringify(draft));
    });
  }
  default:
    return state;
  }
};

export default cart;
