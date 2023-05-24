import { isEmpty } from "lodash";
import { all, call, put, takeLatest } from "redux-saga/effects";

import api from "../../../services/api";
import {
  GET_CATEGORIES_PENDING,
  getCategoriesRejected,
  getCategoriesSuccess,
} from "../actions/category.actions";

function* getCategories() {
  try {
    const response = yield call(api.get, "api/products/categories/");
    if (!isEmpty(response.data) && !isEmpty(response.data.body))
      yield put(getCategoriesSuccess(response.data.body.categories));
  } catch (err) {
    yield put(getCategoriesRejected(err.message));
  }
}

export default all([takeLatest(GET_CATEGORIES_PENDING, getCategories)]);
