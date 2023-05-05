import { all, call, put, takeLatest } from "redux-saga/effects";

import api from "../../../services/api";
import { formatPrice,jsonToQueryString } from "../../../utils/format";
import {
  GET_PRODUCTS_PENDING,
  getProductsRejected,
  getProductsSuccess} from "../actions/product.actions";

function* getProducts(action) {
  try {
    const { filter } = action;
    const products = yield call(api.get, `/products?${jsonToQueryString(filter)}`);
    const data = products.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price)
    }));
    yield put(getProductsSuccess(data));
  } catch (err) {
    yield put(getProductsRejected(err.message));
  }
}

export default all([takeLatest(GET_PRODUCTS_PENDING, getProducts)]);
