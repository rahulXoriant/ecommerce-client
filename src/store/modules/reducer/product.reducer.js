import { GET_PRODUCTS_REJECTED, GET_PRODUCTS_SUCCESS } from '../actions/product.actions';

const category = (state = { value: null, loading: true }, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case GET_PRODUCTS_REJECTED:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export default category;
