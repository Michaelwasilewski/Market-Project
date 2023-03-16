// This helps create the redux store
import { configureStore } from '@reduxjs/toolkit';

// It will combine all my modules E.G (products, productDetails, etc)

import { combineReducers } from '@reduxjs/toolkit';
import listings from './modules/listings';
// Here i am combining my modules
const reducer = combineReducers({
	// i will list my modules
	listings,
});

// Creating my store
const index = configureStore({
	reducer,
});

export default index;
