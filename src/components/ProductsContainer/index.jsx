import React, { useEffect } from 'react';
import s from './style.module.sass';
import Product from '../Product';
import { useParams } from 'react-router-dom';
import Filtration from '../Filtration';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../store/asyncActions/products';
import { useContext } from 'react';
import { Context } from '../../context';

export default function ProductsContainer() {
	const { id_category } = useParams();
	const dispatch = useDispatch();
	const showProducts = useSelector((state) => state.filtration);
	const length_products = showProducts.length;

	const { categories } = useContext(Context);
	const current_category = categories.find((el) => el.id === +id_category);

	const sample_word =
		showProducts.length === 0 || showProducts.length === 1
			? 'product'
			: 'products';  

	useEffect(() => {
		dispatch(loadProducts(id_category));
	}, []);
	
	return (
		current_category &&
		<div className={['wrapper', s.wrapper].join(' ')}>
			<div className={s.subheader}>
				<p>{current_category.title}</p>
				<p className={s.count_product}>
					{showProducts.length} {sample_word}
				</p>
			</div>
			<div className={s.filtration}>
				<Filtration />
			</div>
			<div className={s.products_container}>
				{showProducts.length === 0 ? (
					<p className={s.empty_request}>
						Nothing was found according to your request.
					</p>
				) : (
					showProducts.map((product) => (
						<Product key={product.id} {...product} />
					))
				)}
			</div>
		</div>
	);
}
