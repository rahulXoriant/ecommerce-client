import { all, call, put, takeLatest } from "redux-saga/effects";

import api from "../../../services/api";
import {
  GET_CATEGORIES_PENDING,
  getCategoriesRejected,
  getCategoriesSuccess,
} from "../actions/category.actions";

function* getCategories() {
  try {
    const categories = yield call(api.get, "/category");
    yield put(getCategoriesSuccess(categories.data));
  } catch (err) {
    yield put(getCategoriesRejected(err.message));
  }
}

export default all([takeLatest(GET_CATEGORIES_PENDING, getCategories)]);
