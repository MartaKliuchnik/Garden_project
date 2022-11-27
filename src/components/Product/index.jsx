import React from 'react';
import s from './style.module.sass';
import picture from '../Product/media/image_tools.png';
import AddToBasket from '../UI/AddToBasket';

export default function Product({ title, price, discont_price }) {

    const block_price = discont_price === 0.75
        ?
            <>
                <p className = {s.clear_price} > { price }€</p>
            </>
        :
            <>
                <p className={s.discount_price}>{discont_price}€</p>
                <p className={s.price}>{price}€</p>
                <p className={s.discount}>-{Math.round((price - discont_price)*100/price)}%</p>
            </>

    return (
        <div className={s.wrapper}>
            <div className={s.product_container}>
                <div className={s.product_img}>
                    <img src={picture} alt="photo_tools"/>
                </div>
                <div className={s.product_price}>{block_price}</div>
                <p>{title}</p>
            </div>
            <div className={s.btn}>
                <AddToBasket/>
            </div>
        </div>
    )
}
