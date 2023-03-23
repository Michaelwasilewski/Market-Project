import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from '../components/views/Products';
import SingleProductView from '../components/views/SingleProductView';
import CartCheckOutPage from '../components/views/CartCheckOutPage';
import ContactUs from '../components/views/ContactUs';
import NotFound from '../components/views/NotFound';

const Router = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Products />} />
				<Route
					path="/products"
					element={<Products />}
				/>
				<Route
					path="/product/:id"
					element={<SingleProductView />}
				/>
				<Route
					path="/cart"
					element={<CartCheckOutPage />}
				/>
				<Route
					path="/contact"
					element={<ContactUs />}
				/>
				{/* Only match this when no other routes is a valid match */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};

export default Router;
