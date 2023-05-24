import { isEmpty } from "lodash";
import { all, call, put, select, takeLatest } from "redux-saga/effects";

import api from "../../../services/api";
import { formatPrice } from "../../../utils/format";
import { showTostMessage } from "../../../utils/notification";
import {
  ADD_TO_CART_PENDING,
  addToCartRejected,
  addToCartSuccess,
  UPDATE_CART_AMOUNT_PENDING,
  updateAmountRejected,
  updateAmountSuccess,
} from "../actions/cart.actions";

function* addToCart(action) {
  try {
    const { id } = action.payload;
    const productExists = yield select(state => state.cart.find(p => p.id === id));

    let stock;
    const response = yield call(api.get, `/api/products/stocks/${id}/`);
    if (!isEmpty(response.data) && !isEmpty(response.data.body))
      stock = response.data.body.stock;

    const stockAmount = stock.amount;
    const currentAmount = productExists ? productExists.amount : 0;
    const amount = currentAmount + 1;

    if (amount > stockAmount) {
      showTostMessage("warning", "Ordered quantity out of stock.");
      return;
    }

    if (productExists) {
      yield put(updateAmountSuccess(id, amount));
      showTostMessage("success", "Updated amount successfully.");
    } else {
      let productDetails;
      const productResponse = yield call(api.get, `/api/products/${id}/`);
      if (!isEmpty(productResponse.data) && !isEmpty(productResponse.data.body))
        productDetails = productResponse.data.body.product;

      const data = {
        ...productDetails,
        amount: 1,
        priceFormatted: formatPrice(productDetails.price),
      };
      yield put(addToCartSuccess(data));
      showTostMessage("success", "Added to cart successfully.");
    }
  } catch (err) {
    yield put(addToCartRejected(err.message));
  }
}

function* updateAmount({ id, amount }) {
  try {
    if (amount <= 0) return;

    let stock;
    const response = yield call(api.get, `/api/products/stocks/${id}/`);
    if (!isEmpty(response.data) && !isEmpty(response.data.body))
      stock = response.data.body.stock;

    const stockAmount = stock.amount;

    if (amount > stockAmount) {
      showTostMessage("warning", "Ordered quantity out of stock.");
      return;
    }

    yield put(updateAmountSuccess(id, amount));
    showTostMessage("success", "Updated amount successfully.");
  } catch (err) {
    yield put(updateAmountRejected(err.message));
  }
}

export default all([
  takeLatest(ADD_TO_CART_PENDING, addToCart),
  takeLatest(UPDATE_CART_AMOUNT_PENDING, updateAmount),
]);
