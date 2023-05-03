import { combineReducers } from 'redux';

import cart from './cart.reducer';
import category from './category.reducer';
import product from './product.reducer'

export default combineReducers({ cart, category, product });
