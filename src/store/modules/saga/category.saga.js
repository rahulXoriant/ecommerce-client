import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { GET_CATEGORIES_PENDING, getCategoriesSuccess, getCategoriesRejected } from '../actions/category.actions';

function* getCategories() {
  try {
    const categories = yield call(api.get, `/category`);
    getCategoriesSuccess(categories);
    
  } catch (err) {
    yield put(getCategoriesRejected(err.message))
  }
}

export default all([
  takeLatest(GET_CATEGORIES_PENDING, getCategories),
]);
