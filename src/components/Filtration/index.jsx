import React, {useState} from 'react';
import s from './style.module.sass';
import { useDispatch } from 'react-redux';
import { check_discount_action, check_sort_action, load_all_products_for_filtration_action, check_price_action } from '../../store/reducer/filterReducer';

export default function Filtration() {
    const [isChecked, setIsChecked] = useState(false);
    const [prices, setPrices] = useState(false);

    const dispatch = useDispatch();

    const reset_setting = () => {
        dispatch(load_all_products_for_filtration_action());
        setIsChecked(false);
        document.getElementById('cd').checked = false;
        document.getElementById('sorts').value = '';
        setPrices(false);
        document.getElementById('from_price').value = '';
        document.getElementById('to_price').value = '';
    }

    const submit_sort = event => {
        event.preventDefault();
        const { sorts } = event.target;
        dispatch(check_sort_action(+sorts.value));
    }
    
    const submit_price = event => {
        event.preventDefault();
        const { from_price, to_price } = event.target;
        const payload = {
            from_price: +from_price.value,
            to_price: +to_price.value,
            change_prices: prices
        }
        dispatch(check_price_action(payload));
        setPrices(true);
        document.getElementById('cd').checked = false;
        setIsChecked(false);
        document.getElementById('sorts').value = '';
    }
    
    return (
        <div className={s.filtr_container}>
            <form className={s.price_filtr}
                onSubmit={submit_price}
            >
                <label>Price:</label>
                <input type="text" placeholder='from' name='from_price' id='from_price'/>
                <input type="text" placeholder='to' name='to_price' id='to_price'/>
                <button>Add</button>
            </form>

            <div className={s.discount_filtr}>
                <label>Discounted Products</label>
                <input type="checkbox" id='cd'
                    onChange={() => {
                        setIsChecked(!isChecked);
                        dispatch(check_discount_action(isChecked))
                    }}
                />
            </div>

            <form className={s.sort}
                onSubmit={submit_sort}
            >
                <label>Sort:</label>
                <select name="sorts" defaultValue='' id='sorts'>
                    <option value='' disabled hidden>by default</option>
                    <option value="1">price: high-low</option>
                    <option value="2">price: low-high</option>
                </select>
                <button>Add</button>
            </form>

            <button onClick={() => reset_setting()}>Reset settings</button>
        </div>
    )
}
