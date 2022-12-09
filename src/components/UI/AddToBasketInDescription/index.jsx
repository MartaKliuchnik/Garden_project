import React from 'react';
import s from './style.module.sass';

export default function AddToBasketInDescription(props) {
    return (
        <button {...props} className={s.btn_to_basket}>Add to basket</button>
    )
}
