import { createSlice } from '@reduxjs/toolkit';

// Slice
// name
// initial state
// reducers // Those are the functions which amend of change the state

const listingSlice = createSlice({
	name: 'Listings',
	initialState: {
		products: [],
		total: 0,
	},
	reducers: {
		// Here we declare the functions which amend our state
		SET_PRODUCTS: (state, action) => {
			// state is the current state at this time
			// action : It will have the new state we get from the API call.
			state.products = action.payload;
		},
	},
});

export default listingSlice.reducer;

// Actions  -- API calls etc NB:****** WE DON'T CHANGE THE STATE HERE******

const { SET_PRODUCTS } = listingSlice.actions;
export const FetchProducts = () => async (dispatch) => {
	try {
		const response = await fetch(
			'https://dummyjson.com/products'
		);
		const data = await response.json();
		console.log(data.products);

		dispatch(SET_PRODUCTS(data.products));
	} catch (e) {
		// handle any error that occours during the API call
		return console.error(e);
	}
};
