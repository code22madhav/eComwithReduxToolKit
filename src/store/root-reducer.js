import { combineReducers } from '@reduxjs/toolkit'; 
//only change here is change the import from redux to @reduxjs/toolkit

import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/category.reducer';
import { cartReducer } from './cart/cart.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
