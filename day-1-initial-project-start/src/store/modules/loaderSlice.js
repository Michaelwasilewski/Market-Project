import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
	name: 'loader',
	initialState: {
		isLoading: false,
	},
	reducers: {
		// here we have functions witch will ammend the state only
		SET_LOADER: (state, action) => {
			state.isLoading = action.payload;
		},
	},
});

const { actions, reducer } = loaderSlice;
export default reducer;
const { SET_LOADER } = actions;

// actions

export const setLoadingState =
	(loadingStatus) => async (dispatch) => {
		dispatch(SET_LOADER(loadingStatus));
	};
