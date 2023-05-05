import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/reducer/root.reducer';
import rootSaga from './modules/saga/root.saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// Note from the maintainer
// https://stackoverflow.com/a/71947129
// using configureStore from redux toolkit because createStore from redux has been depreciated
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
});

sagaMiddleware.run(rootSaga);

export default store;
