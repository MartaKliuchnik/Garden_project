import React, { useState } from 'react';
import s from './style.module.sass';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import {
	check_sort_promotions_action,
	price_search_promotions_action,
	word_search_promotions_action,
	reset_promotions_action
} from '../../store/reducer/promotionsReducer';
import { useEffect } from 'react';


export default function FilterForPromotions() {
	const dispatch = useDispatch();

	const [priceParamsForPromotions, setPriceParamsForPromotions] = useState({ minInput: -Infinity, maxInput: Infinity });
	const maxInput = event => {
		setPriceParamsForPromotions(pre => ({ ...pre, maxInput: +event.target.value || Infinity }));
	}
	const minInput = event => {
		setPriceParamsForPromotions(pre => ({ ...pre, minInput: +event.target.value || -Infinity }));
	}


	const check_sort_promotions = (event) => {
		const sorts = event.target;
		dispatch(check_sort_promotions_action(+sorts.value));
	}


	const [searchPromotionsParams, setSearchPromotionsParams] = useState('');
	const check_search_promotions = event => {
		if (event.target.value !== '') {
			setSearchPromotionsParams(event.target.value);
		} else {
			setSearchPromotionsParams('')
		}
	}


	useEffect(() => {
		if (searchPromotionsParams === '') {
			const payload = {
				params: priceParamsForPromotions,
				check_search: false
			};
			dispatch(price_search_promotions_action(payload))
		} else {
			const payloadForSearch = {
				params: searchPromotionsParams,
				check_search: false
			};
			dispatch(word_search_promotions_action(payloadForSearch));
			const payload = {
				params: priceParamsForPromotions,
				check_search: true
			};
			dispatch(price_search_promotions_action(payload));
		}
	}, [priceParamsForPromotions]);
	
	useEffect(() => {
		if (priceParamsForPromotions.min === -Infinity && priceParamsForPromotions.maxInput === Infinity) {
			const payloadForSearch = {
				params: searchPromotionsParams,
				check_search: false
			};
			dispatch(word_search_promotions_action(payloadForSearch));
		} else {
			const payload = {
				params: priceParamsForPromotions,
				check_search: false
			};
			dispatch(price_search_promotions_action(payload));
			const payloadForSearch = {
				params: searchPromotionsParams,
				check_search: true
			};
			dispatch(word_search_promotions_action(payloadForSearch));
		}
    }, [searchPromotionsParams]);


	const reset_promotions = () => {
		document.getElementById('sorts').value = '';
		document.getElementById('search_word').value = '';
		setSearchPromotionsParams('');
		setPriceParamsForPromotions({ minInput: -Infinity, maxInput: Infinity });
		dispatch(reset_promotions_action());
	}
	
	return (
		<div className={s.filtr_container}>
			<div className={s.filt_block}>
				<form className={s.price_filtr}>
					<label>Price:</label>
					<div className={s.input_wrapper}>
						<input
							type='number'
							placeholder='from'
							onInput={minInput}
							value={priceParamsForPromotions.minInput}
						/>
						<input
							type='number'
							placeholder='to'
							onInput={maxInput}
							value={priceParamsForPromotions.maxInput}
						/>
					</div>
				</form>

				<form className={s.sort}>
					<label>Sort:</label>
					<select name='sorts' defaultValue='' id='sorts' onChange={check_sort_promotions}>
						<option value='' disabled hidden> by default </option>
						<option value='1'>price: high-low</option>
						<option value='2'>price: low-high</option>
					</select>
				</form>
			</div>

			<div className={s.search_block}>
				<form className={s.search}>
					<label> <SearchOutlined /> </label>
					<input
						type='text'
						placeholder='Search'
						id='search_word'
						value={searchPromotionsParams}
						onChange={check_search_promotions}
					/>
				</form>

				<div className={s.btn_container}>
					<button onClick={reset_promotions}>Reset settings</button>
				</div>
			</div>
		</div>
	);
}
