import React from 'react';
import s from './style.module.sass';

export default function Filtration() {
    return (
        <div className={s.filtr_container}>
            <div className={s.price_filtr}>
                <p>Price:</p>
                <input type="number" placeholder='from' name='from_price' />
                <input className={s.input_2} type="number" placeholder='to' name='to_price'/>
            </div>
            <div className={s.dicsount_filtr}>
                <p>Discounted Products</p>
                <input type="checkbox" name='discount' id='cb'/>
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
