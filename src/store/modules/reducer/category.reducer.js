import { GET_CATEGORIES_REJECTED, GET_CATEGORIES_SUCCESS } from "../actions/category.actions";

const category = (state = { value: null, loading: true }, action) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case GET_CATEGORIES_REJECTED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default category;
