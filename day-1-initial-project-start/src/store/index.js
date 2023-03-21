// This helps create the redux store
import { configureStore } from '@reduxjs/toolkit';

// It will combine all my modules E.G (products, productDetails, etc)

import { combineReducers } from '@reduxjs/toolkit';
import Products from './modules/products';
import loaderSlice from './modules/loaderSlice';
// Here i am combining my modules
const reducer = combineReducers({
	// i will list my modules
	Products: Products,
	loader: loaderSlice,
});

// Creating my store
const index = configureStore({
	reducer,
});

export default index;
