import React from 'react';
import s from './style.module.sass';

export default function OrderForm() {
    return (
        <form className={s.container}>
            <input type="phone" placeholder='Your phone number' name='phone' />
            <button>Order</button>
        </form>
    )
}
