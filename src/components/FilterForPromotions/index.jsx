import React, { useState } from 'react';
import s from './style.module.sass';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { sort_action, price_search_action, word_search_action, reset_action } from '../../store/reducer/promotionsReducer';
import { useEffect } from 'react';


export default function FilterForPromotions() {
	const dispatch = useDispatch();

	const [priceParams, setPriceParams] = useState({ min: -Infinity, max: Infinity });

	const maxInput = event => {
		setPriceParams(pre => ({ ...pre, max: +event.target.value || Infinity }));
	}
	const minInput = event => {
		setPriceParams(pre => ({ ...pre, min: +event.target.value || -Infinity}));
	}

	useEffect(() => {
		dispatch(price_search_action(priceParams));
	}, [priceParams])

	const check_sort = (event) => {
		event.preventDefault();
		const sorts = event.target;
		dispatch(sort_action(+sorts.value));
	}

	const [searchParams, setSearchParams] = useState('');

	const searchWord = event => {
		if (event.target.value !== '') {
			setSearchParams(event.target.value);
			dispatch(word_search_action(event.target.value));
		} else {
			reset()
		}
		
	}
	
	const reset = () => {
		document.getElementById('sorts').value = '';
		document.getElementById('search_word').value = '';
		setPriceParams({ min: -Infinity, max: Infinity });
		dispatch(reset_action());
	}
	
	return (
		<div className={s.filtr_container}>
			<div className={s.filt_block}>
				<form className={s.price_filtr}>
					<label>Price:</label>
					<input
						type='number'
						placeholder='from'
						onChange={minInput}
						value={priceParams.min}
					/>
					<input
						type='number'
						placeholder='to'
						onChange={maxInput}
						value={priceParams.max}
					/>
				</form>

				<form className={s.sort}>
					<label>Sort:</label>
					<select
						name='sorts'
						defaultValue=''
						id='sorts'
						onChange={check_sort}>
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
						placeholder='Search'
						onChange={searchWord}
						id='search_word'
					/>
				</form>

				<button onClick={reset}>Reset settings</button>
			</div>
		</div>
	);
}
