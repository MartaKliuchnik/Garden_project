import React, { useState } from 'react';
import s from './style.module.sass';
import { useDispatch } from 'react-redux';
import {
	check_discount_action,
	check_sort_action,
	load_all_products_for_filtration_action,
	check_price_action,
	search_product_action,
} from '../../store/reducer/filterReducer';
import { SearchOutlined } from '@ant-design/icons';

export default function Filtration() {
	const [isChecked, setIsChecked] = useState(false);
	const [prices, setPrices] = useState(false);

	// const [priceParams, setPriceParams] = useState({ min: -Infinity, max: Infinity });
	
	// const maxInput = event => {
	// 	setPriceParams(pre => ({ ...pre, max: +event.target.value || Infinity}));
	// }

	// const minInput = event => {
	// 	setPriceParams(pre => ({ ...pre, min: +event.target.value || -Infinity}));
	// }

	// console.log(priceParams)

	const dispatch = useDispatch();

	const reset_setting = () => {
		dispatch(load_all_products_for_filtration_action());
		setIsChecked(false);
		document.getElementById('cd').checked = false;
		document.getElementById('sorts').value = '';
		setPrices(false);
		document.getElementById('from_price').value = '';
		document.getElementById('to_price').value = '';
	};

	const change_sort = (event) => {
		const sorts = event.target;
		dispatch(check_sort_action(+sorts.value));
	};

	const submit_price = (event) => {
		event.preventDefault();
		const { from_price, to_price } = event.target;
		console.log(from_price.value, to_price.value);
		const payload = {
			from_price: +from_price.value,
			to_price: +to_price.value,
			change_prices: prices,
		};
		dispatch(check_price_action(payload));
		setPrices(true);
		document.getElementById('cd').checked = false;
		setIsChecked(false);
		document.getElementById('sorts').value = '';
	};

	const change_search = (event) => {
		const search = event.target;
		dispatch(search_product_action(search.value));
	};

	return (
		<div className={s.filtr_container}>
			<div className={s.filt_block}>
				<form className={s.price_filtr}
					// onSubmit={submit_price}
				>
					<label>Price:</label>
					<input type='number' placeholder='from' name='from_price' id='from_price'
						// onInput={minInput}
					/>
					<input type='number' placeholder='to' name='to_price' id='to_price'
						// onInput={maxInput}
					/>
					<button>Add</button>
				</form>

				<div className={s.discount_filtr}>
					<label>Discounted Products</label>
					<input
						type='checkbox'
						id='cd'
						onChange={() => {
							setIsChecked(!isChecked);
							dispatch(check_discount_action(isChecked));
						}}
					/>
				</div>

				<form className={s.sort}>
					<label>Sort:</label>
					<select
						name='sorts'
						defaultValue=''
						id='sorts'
						onChange={change_sort}
					>
						<option value='' disabled hidden>
							by default
						</option>
						<option value='1'>price: high-low</option>
						<option value='2'>price: low-high</option>
					</select>
				</form>
			</div>

			<div className={s.search_block}>
				<form className={s.search}>
					<label>
						<SearchOutlined />
					</label>
					<input
						type='text'
						name='search'
						placeholder='Search'
						onChange={change_search}
					/>
				</form>
				<button onClick={() => reset_setting()}>Reset settings</button>
			</div>
		</div>
	);
}
