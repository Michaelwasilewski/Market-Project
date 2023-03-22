import { createSlice } from '@reduxjs/toolkit';
import { setLoadingState } from './loaderSlice';

// Slice
// name
// initial state
// reducers // Those are the functions which amend of change the state

const ProductsSlice = createSlice({
	name: 'products',
	initialState: {
		products: [],
		singleProduct: null,
	},
	reducers: {
		// Here we declare the functions which amend our state
		SET_PRODUCTS: (state, action) => {
			// state is the current state at this time
			// action : It will have the new state we get from the API call.
			state.products = action.payload;
		},
		SET_SINGLE_PRODUCT: (state, action) => {
			state.singleProduct = action.payload;
		},
	},
});

export default ProductsSlice.reducer;

// Actions  -- API calls etc NB:****** WE DON'T CHANGE THE STATE HERE******
// Fetch multiple products
const { SET_PRODUCTS } = ProductsSlice.actions;
const { SET_SINGLE_PRODUCT } = ProductsSlice.actions;
export const FetchProducts = () => async (dispatch) => {
	dispatch(setLoadingState(true)); // showing loader
	try {
		const response = await fetch(
			'https://dummyjson.com/products'
		);
		const data = await response.json();
		console.log(data.products);

		dispatch(SET_PRODUCTS(data.products));
		dispatch(setLoadingState(false)); // hiding the loader
	} catch (e) {
		// handle any error that occours during the API call
		return console.error(e);
	}
};
// Will fetch single product by ID
export const FetchSingleProduct =
	(id) => async (dispatch) => {
		dispatch(setLoadingState(true));
		try {
			const response = await fetch(
				`https://dummyjson.com/products/${id}`
			);
			const singleProductData = await response.json();
			dispatch(SET_SINGLE_PRODUCT(singleProductData));
			dispatch(setLoadingState(false));
		} catch (e) {
			return console.error(e);
		}
	};
