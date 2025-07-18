import { combineReducers } from '@reduxjs/toolkit'; 
//only change here is change the import from redux to @reduxjs/toolkit

import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/category.slice';
import { cartReducer } from './cart/cart.slice';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
