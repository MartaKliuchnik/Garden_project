import React from 'react';
import s from './style.module.sass';
import picture from '../Product/media/image_tools.png';
import AddToBasket from '../UI/AddToBasket';
import { useDispatch } from 'react-redux';
import {addToBasket} from '../../store/reducer/basketReducer'

export default function Product({ id, title, price, discont_price }) {

    const dispatch = useDispatch();

    const add_to_basket = () => dispatch(addToBasket({ id, title, price, discont_price }));

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
            <div className={s.btn} onClick={add_to_basket}>
                <AddToBasket/>
            </div>
        </div>
    )
}
