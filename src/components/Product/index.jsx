import React from 'react';
import s from './style.module.sass';
import AddToBasket from '../UI/AddToBasket';
import { useDispatch } from 'react-redux';
import { add_to_basket_action } from '../../store/reducer/basketReducer';
import { Link } from 'react-router-dom';

export default function Product({ id, title, price, discont_price, image}) {

    const dispatch = useDispatch();

    const add_to_basket = () => dispatch(add_to_basket_action({ id, title, image, price, discont_price }));

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
    
    const link = `/product/${id}`;
    const img_link = `http://164.92.182.164:3333/${image}`;

    return (
        <div className={s.wrapper}>

            <Link to={link} className={s.product_container}>
                <div className={s.product_img}>
                    <img src={img_link} alt={title}/>
                </div>
                <div className={s.product_price}>{block_price}</div>
                <p>{title}</p>
            </Link>
            
            <div className={s.btn} onClick={add_to_basket}>
                <AddToBasket/>
            </div>

        </div>
    )
}
