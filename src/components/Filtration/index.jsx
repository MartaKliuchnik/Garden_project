import React from 'react';
import { useContext } from 'react';
import s from './style.module.sass';
import { Context } from '../../context';

export default function Filtration() {

    const { checkDiscount, setIsChecked, isChecked, checkSort, checkPrice } = useContext(Context);

    const submit_sort = event => {
        event.preventDefault();
        const { sorts } = event.target;
        checkSort(+sorts.value);
    }
    
    const submit_price = event => {
        event.preventDefault();
        const { from_price, to_price } = event.target;
        checkPrice(+from_price.value, +to_price.value);
    }
    
    return (
        <div className={s.filtr_container}>
            <form className={s.price_filtr}
                onSubmit={submit_price}
            >
                <label>Price:</label>
                <input type="text" placeholder='from' name='from_price' />
                <input type="text" placeholder='to' name='to_price' />
                <button>Add</button>
            </form>

            <div className={s.discount_filtr}>
                <label>Discounted Products</label>
                <input type="checkbox" id='cd'
                    onChange={() => {
                        setIsChecked(!isChecked);
                        checkDiscount(isChecked)
                    }}
                />
            </div>

            <form className={s.sort}
                onSubmit={submit_sort}
            >
                <label>Sort:</label>
                <select name="sorts" defaultValue='' >
                    <option value='' disabled hidden>by default</option>
                    <option value="1">price: high-low</option>
                    <option value="2">price: low-high</option>
                </select>
                <button>Add</button>
            </form>
        </div>
    )
}
