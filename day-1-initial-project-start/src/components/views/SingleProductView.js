import { useParams } from 'react-router-dom';
import { useEffect } from 'react'; // It will help me to run the function to fetch product by ID when the component mount
import { useDispatch, useSelector } from 'react-redux';
import { FetchSingleProduct } from '../../store/modules/products';
const SingleProductView = () => {
	let { id } = useParams();
	const dispatch = useDispatch();
	const { singleProduct } = useSelector(
		(state) => state.Products
	);
	useEffect(() => {
		dispatch(FetchSingleProduct(id));
	}, [dispatch, id]);

	return (
		<div>
			<h1>Hello i am single product {id}</h1>
		</div>
	);
};

export default SingleProductView;
