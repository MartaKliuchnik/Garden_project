import React from 'react';
import s from './style.module.sass';
import product from '../BasketCard/media/product_basket.png';
import { deleteBasketCard, incrementCountProductAtTheBasket, decrementCountProductAtTheBasket } from '../../store/reducer/basketReducer';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';


export default function BasketItem({id, title, price, discont_price, count }) {
    
    const dispatch = useDispatch();

    const block_price = discont_price === 0.75
        ?
        <>
            <p className = {s.clear_price}>{price * count}€</p>
        </>
        : 
        <>
            <p className={s.discount_price}>{discont_price * count}€</p>
            <p className={s.price}>{price*count}€</p>
        </>
    
    return (
        <div className={s.basket_item}>
            <CloseOutlined onClick={() => dispatch(deleteBasketCard(id))} className={s.close_icon} />
            <div className={s.product_img}>
                <img src={product} alt="photo_product" />
            </div>
            <div className={s.product_info}>
                <p>{title}</p>
                <div className={s.product_count}>
                    <button onClick={() => dispatch(decrementCountProductAtTheBasket(id))}>-</button>
                    <p>{count}</p>
                    <button onClick={() => dispatch(incrementCountProductAtTheBasket(id))}>+</button>
                </div>
            </div>
            <div className={s.product_price}>{block_price}</div>
        </div>
    )
}
