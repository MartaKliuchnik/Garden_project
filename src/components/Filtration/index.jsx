import React from 'react';
import { useContext } from 'react';
import s from './style.module.sass';
import { Context } from '../../context';

export default function Filtration() {

    const { checkClick, setIsChecked, isChecked } = useContext(Context);
    
    return (
        <div className={s.filtr_container}>
            <div className={s.price_filtr}>
                <p>Price:</p>
                <input type="number" placeholder='from' name='from_price' />
                <input className={s.input_2} type="number" placeholder='to' name='to_price'/>
            </div>

            <div className={s.discount_filtr}>
                <p>Discounted Products</p>
                <input type="checkbox" id='cd'
                    onChange={() => {
                        setIsChecked(!isChecked);
                        checkClick(isChecked)
                    }
                    }
                />
            </div>

            <div className={s.sort}>
                <p>Sort:</p>
                <select name="sort" defaultValue="default">
                    <option value="1">price: high-low</option>
                    <option value="2">price: low-high</option>
                </select>
            </div>
        </div>
    )
}
