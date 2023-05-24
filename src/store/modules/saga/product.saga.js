import { isEmpty } from "lodash";
import { all, call, put, takeLatest } from "redux-saga/effects";

import api from "../../../services/api";
import { formatPrice, jsonToQueryString } from "../../../utils/format";
import {
  GET_PRODUCTS_PENDING,
  getProductsRejected,
  getProductsSuccess,
} from "../actions/product.actions";

function* getProducts(action) {
  try {
    const { filter } = action;
    const response = yield call(api.get, `/api/products/?${jsonToQueryString(filter)}`);
    if (!isEmpty(response.data) && !isEmpty(response.data.body)) {
      const data = response.data.body.products.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      yield put(getProductsSuccess(data));
    }
  } catch (err) {
    yield put(getProductsRejected(err.message));
  }
}

export default all([takeLatest(GET_PRODUCTS_PENDING, getProducts)]);
