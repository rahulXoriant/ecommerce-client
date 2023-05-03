import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { formatPrice } from '../../../utils/format';
import { 
  ADD_TO_CART_PENDING, 
  UPDATE_CART_AMOUNT_PENDING, 
  addToCartSuccess, 
  addToCartRejected, 
  updateAmountSuccess, 
  updateAmountRejected
} from '../actions/cart.actions';

function* addToCart(action) {
  try {
    const { id } = action.payload;
    const productExists = yield select(state =>
      state.cart.find(p => p.id === id)
    );
  
    const stock = yield call(api.get, `/stock/${id}`);
  
    const stockAmount = stock.data.amount;
    const currentAmount = productExists ? productExists.amount : 0;
    const amount = currentAmount + 1;
  
    if (amount > stockAmount) {
      console.log('Ordered quantity out of stock.');
      return;
    }
  
    if (productExists) {
      yield put(updateAmountSuccess(id, amount));
    } else {
      const response = yield call(api.get, `/products/${id}`);
  
      const data = {
        ...response.data,
        amount: 1,
        priceFormatted: formatPrice(response.data.price),
      };
      yield put(addToCartSuccess(data));
  
    }
  } catch (err) {
    yield put(addToCartRejected(err.message))
  }
}

function* updateAmount({ id, amount }) {
  try {
    if (amount <= 0) return;
  
    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;
  
    if (amount > stockAmount) {
      console.log('Ordered quantity out of stock.');
      return;
    }
  
    yield put(updateAmountSuccess(id, amount));
  } catch (err) {
    yield put(updateAmountRejected(err.message))
  }
}

export default all([
  takeLatest(ADD_TO_CART_PENDING, addToCart),
  takeLatest(UPDATE_CART_AMOUNT_PENDING, updateAmount),
]);