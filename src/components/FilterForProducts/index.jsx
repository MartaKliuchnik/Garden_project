import React, {useState} from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import s from './style.module.sass';
import { SearchOutlined } from '@ant-design/icons';
import {
    price_search_products_action,
    sort_products_action,
    word_search_products_action,
    chech_discount_products_action,
    reset_products_action
} from '../../store/reducer/productsReducer';

export default function FilterForProducts() {
    const dispatch = useDispatch();


    const [priceParams, setPriceParams] = useState({ minInput: -Infinity, maxInput: Infinity });
    const minInput = event => {
        setPriceParams(pre => ({ ...pre, minInput: +event.target.value || -Infinity }));
    }
    const maxInput = event => {
        setPriceParams(pre => ({ ...pre, maxInput: +event.target.value || Infinity }));
    }
    

    const check_sort_products = event => {
        const sorts = event.target;
		dispatch(sort_products_action(+sorts.value));
    }


    const [searchProductsParams, setSearchProductsParams] = useState('');
    const check_search_products = event => {
        if (event.target.value !== '') {
            setSearchProductsParams(event.target.value);
        } else {
            setSearchProductsParams('')
		}
    }
    
    let [isChecked, setIsChecked] = useState(false);


    useEffect(() => {
        if (searchProductsParams === '' && !isChecked) {
            const payload = {
                params: priceParams,
                check_search: false
            };
            dispatch(price_search_products_action(payload))
        } else if (searchProductsParams === '' && isChecked) {
            const payload = {
                params: priceParams,
                check_search: false
            };
            dispatch(price_search_products_action(payload));
            const payloadForDiscounter = {
                params: isChecked,
                check_search: true
            };
            dispatch(chech_discount_products_action(payloadForDiscounter));
        } else if (searchProductsParams !== '' && !isChecked) {
            const payloadForSearch = {
                params: searchProductsParams,
                check_search: false
            };
            dispatch(word_search_products_action(payloadForSearch));
            const payload = {
                params: priceParams,
                check_search: true
            };
            dispatch(price_search_products_action(payload));
        } else if (searchProductsParams !== '' && isChecked) { 
            const payloadForSearch = {
                params: searchProductsParams,
                check_search: false
            };
            dispatch(word_search_products_action(payloadForSearch));
            const payload = {
                params: priceParams,
                check_search: true
            };
            dispatch(price_search_products_action(payload));
            const payloadForDiscounter = {
                params: isChecked,
                check_search: true
            };
            dispatch(chech_discount_products_action(payloadForDiscounter));
        }
    }, [priceParams]);

    useEffect(() => {
        if ((priceParams.minInput === -Infinity && priceParams.maxInput === Infinity) && !isChecked) {
            const payloadForSearch = {
                params: searchProductsParams,
                check_search: false
            };
            dispatch(word_search_products_action(payloadForSearch));
        } else if ((priceParams.minInput === -Infinity && priceParams.maxInput === Infinity) && isChecked) {
            const payloadForSearch = {
                params: searchProductsParams,
                check_search: false
            };
            dispatch(word_search_products_action(payloadForSearch));
            const payloadForDiscounter = {
                params: isChecked,
                check_search: true
            };
            dispatch(chech_discount_products_action(payloadForDiscounter));
        } else if ((priceParams.minInput !== -Infinity || priceParams.maxInput !== Infinity) && !isChecked) { 
            const payload = {
                params: priceParams,
                check_search: false 
            };
            dispatch(price_search_products_action(payload));
            const payloadForSearch = {
                params: searchProductsParams,
                check_search: true
            };
            dispatch(word_search_products_action(payloadForSearch));
        } else if ((priceParams.minInput !== -Infinity || priceParams.maxInput !== Infinity) && isChecked) {
            const payload = {
                params: priceParams,
                check_search: false 
            };
            dispatch(price_search_products_action(payload));
            const payloadForSearch = {
                params: searchProductsParams,
                check_search: true
            };
            dispatch(word_search_products_action(payloadForSearch));
            const payloadForDiscounter = {
                params: isChecked,
                check_search: true
            };
            dispatch(chech_discount_products_action(payloadForDiscounter));
        }
    }, [searchProductsParams]);

    useEffect(() => {
        if (priceParams.minInput === -Infinity && priceParams.maxInput === Infinity && searchProductsParams === '') {
            const payloadForDiscounter = {
                params: isChecked,
                check_search: false
            };
            dispatch(chech_discount_products_action(payloadForDiscounter));
        } else if ((priceParams.minInput !== -Infinity || priceParams.maxInput !== Infinity) && searchProductsParams === '') {
            const payload = {
                params: priceParams,
                check_search: false 
            };
            dispatch(price_search_products_action(payload));
            const payloadForDiscounter = {
                params: isChecked,
                check_search: true
            };
            dispatch(chech_discount_products_action(payloadForDiscounter));
        } else if ((priceParams.minInput === -Infinity && priceParams.maxInput === Infinity) && searchProductsParams !== '') {
            const payloadForSearch = {
                params: searchProductsParams,
                check_search: false
            };
            dispatch(word_search_products_action(payloadForSearch));
            const payloadForDiscounter = {
                params: isChecked,
                check_search: true
            };
            dispatch(chech_discount_products_action(payloadForDiscounter));
        } else if ((priceParams.minInput !== -Infinity || priceParams.maxInput !== Infinity) && searchProductsParams !== '') {
            const payload = {
                params: priceParams,
                check_search: false 
            };
            dispatch(price_search_products_action(payload));
            const payloadForSearch = {
                params: searchProductsParams,
                check_search: true
            };
            dispatch(word_search_products_action(payloadForSearch));
            const payloadForDiscounter = {
                params: isChecked,
                check_search: true
            };
            dispatch(chech_discount_products_action(payloadForDiscounter));
        }
    }, [isChecked]);


    const reset_products = () => {
		document.getElementById('sorts').value = '';
        document.getElementById('search_word').value = '';
        setSearchProductsParams('');
        setPriceParams({ minInput: -Infinity, maxInput: Infinity });
		dispatch(reset_products_action());
	}

    return (
        <div className={s.filtr_container}>
            <div className={s.filt_block}>
                <form className={s.price_filtr}>
					<label>Price:</label>
                    <div className={s.input_wrapper}>
                        <input type='number' placeholder='from' onInput={minInput} value={priceParams.minInput}/>
                        <input type='number' placeholder='to' onInput={maxInput} value={priceParams.maxInput}/>
                    </div>
                </form>

                <div className={s.discount_filtr}>
					<label>Discounted Products</label>
					<input
						type='checkbox'
						id='discounter'
                        onChange={() => {
                            isChecked = !isChecked;
                            setIsChecked(isChecked);
						}}
					/>
				</div>

                <form className={s.sort}>
					<label>Sort:</label>
					<select name='sorts' defaultValue='' id='sorts' onChange={check_sort_products}>
						<option value='' disabled hidden> by default </option>
						<option value='1'>price: high-low</option>
						<option value='2'>price: low-high</option>
					</select>
                </form>
            </div>

            <div className={s.search_block}>
				<form className={s.search}>
					<label><SearchOutlined /></label>
					<input
						type='text'
                        placeholder='Search'
                        id='search_word'
                        value={searchProductsParams}
						onChange={check_search_products}
                    />
                </form>
                <div className={s.btn_container}>
                    <button onClick={reset_products}>Reset settings</button>
                </div>
			</div>
            
        </div>
    )
}
