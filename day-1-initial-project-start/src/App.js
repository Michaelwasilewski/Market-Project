import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FetchProducts } from './store/modules/listings';

function App() {
	const dispatch = useDispatch();

	const { products } = useSelector(
		(state) => state.listings
	);

	useEffect(() => {
		dispatch(FetchProducts());
	}, [dispatch]);
	console.log(products);
	return (
		<div>
			{products.map((product) => (
				<div>
					<span>{product.title}</span>
				</div>
			))}
		</div>
	);
}

export default App;
