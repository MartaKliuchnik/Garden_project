import React from 'react';
import s from './style.module.sass';
import AddToBasketInDescription from '../../components/UI/AddToBasketInDescription';
import { useDispatch } from 'react-redux';
import { add_to_basket_action } from '../../store/reducer/basketReducer';
import {render_link} from '../../store/asyncActions/linkForBack';

export default function Description({ product }) {
	const { id, title, image, price, discont_price, description } = product;

	const dispatch = useDispatch();

	const add_to_basket = () =>
		dispatch(add_to_basket_action({ id, title, price, discont_price, image }));

	const block_price =
		discont_price === 0.75 ? (
			<>
				<p className={s.clear_price}>{price}€</p>
			</>
		) : (
			<div className={s.price_block}>
				<p className={s.discount_price}>{discont_price}€</p>
				<p className={s.price}>{price}€</p>
				<p className={s.discount}>
					-{Math.round(((price - discont_price) * 100) / price)}%
				</p>
			</div>
		);
	
	// const img_link = `http://164.92.182.164:3333${image}`;
	const img_link = `${render_link}${image}`;

	return (
		<div className={s.container}>

		<div className={['wrapper', s.wrapper].join(' ')}>
			<p className={s.subheader}>{title}</p>
			<div className={s.description}>
				<div className={s.product_img}>
					<img src={img_link} alt={title} />
				</div>
				<div className={s.product_info}>
					<div className={s.price_and_btn_to_basket_container}>
						<div>{block_price}</div>
						<AddToBasketInDescription onClick={add_to_basket} />
					</div>
					<div className={s.description_block}>
						<p className={s.subheader_description}>Description</p>
						<div className={s.description_container}>
							<p>{description}</p>
						</div>
					</div>
				</div>
			</div>
			</div>
			</div>
	);
}
