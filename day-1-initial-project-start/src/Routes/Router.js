import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from '../components/views/Products';
import SingleProductView from '../components/views/SingleProductView';

const Router = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Products />} />
				<Route path="/products" element={<Products />} />
				<Route
					path="/product/:id"
					element={<SingleProductView />}
				/>
			</Routes>
		</>
	);
};

export default Router;
