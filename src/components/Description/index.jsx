import React from 'react';
import s from './style.module.sass';
import picture from './media/image.png';
import AddToBasketInDescription from '../../components/UI/AddToBasketInDescription';
import { useDispatch } from 'react-redux';
import { add_to_basket_action } from '../../store/reducer/basketReducer';

export default function Description({ product }) {
	const { id, title, price, discont_price, description } = product;

	const dispatch = useDispatch();

	const add_to_basket = () =>
		dispatch(add_to_basket_action({ id, title, price, discont_price }));

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

	return (
		<div className={['wrapper', s.wrapper].join(' ')}>
			<p className={s.subheader}>{title}</p>
			<div className={s.description}>
				<div className={s.product_img}>
					<img src={picture} alt={title} />
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
	);
}
