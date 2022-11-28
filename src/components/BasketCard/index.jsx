import React from 'react';
import s from './style.module.sass';
import product from '../BasketCard/media/product_basket.png';


export default function BasketItem({ title, price, discont_price }) {
    
    const block_price = discont_price === 0.75
        ?
        <>
            <p className = {s.clear_price}>{price}€</p>
        </>
        : 
        <>
            <p className={s.discount_price}>{discont_price}€</p>
            <p className={s.price}>{price}€</p>
        </>
    
    return (
        <div className={s.basket_item}>
            <div className={s.product_img}>
                <img src={product} alt="photo_product" />
            </div>
            <div className={s.product_info}>
                <p>{title}</p>
                <div className={s.product_count}>
                    <button>-</button>
                    <p>0</p>
                    <button>+</button>
                </div>
            </div>
            <div className={s.product_price}>{block_price}</div>
        </div>
    )
}
