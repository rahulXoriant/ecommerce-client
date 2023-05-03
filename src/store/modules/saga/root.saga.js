import { all, fork } from 'redux-saga/effects';

import cart from './cart.saga';
import category from './category.saga';
import product from './product.saga'

export default function* rootSaga() {
  return yield all([cart, category, product]);
}