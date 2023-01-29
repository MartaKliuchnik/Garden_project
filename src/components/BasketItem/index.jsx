import React from 'react';
import s from './style.module.sass';
import { delete_basket_card_action, decrement_count_product_at_the_basket_action, increment_count_product_at_the_basket_action } from '../../store/reducer/basketReducer';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';


export default function BasketItem({id, title, price, image, discont_price, count }) {
    
    const dispatch = useDispatch();

    const block_price = discont_price === 0.75
        ?
        <>
            <p className = {s.clear_price}>{Math.round(price * count)}€</p>
        </>
        : 
        <>
            <p className={s.discount_price}>{Math.round(discont_price * count)}€</p>
            <p className={s.price}>{Math.round(price*count)}€</p>
        </>
    
    const img_link = ` http://164.92.182.164:3333/${image}`;

    return (
        <div className={s.basket_item}>
            <CloseOutlined onClick={() => dispatch(delete_basket_card_action(id))} className={s.close_icon} />
            <div className={s.product_img}>
                <img src={img_link} alt={title} />
            </div>
            <div className={s.product_info}>
                <p>{title}</p>
                <div className={s.product_count}>
                    <button onClick={() => dispatch(decrement_count_product_at_the_basket_action(id))}>-</button>
                    <p>{count}</p>
                    <button onClick={() => dispatch(increment_count_product_at_the_basket_action(id))}>+</button>
                </div>
            </div>
            <div className={s.product_price}>{block_price}</div>
        </div>
    )
}
