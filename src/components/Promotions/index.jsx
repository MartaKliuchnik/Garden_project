import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../Product';
import s from './style.module.sass';


export default function Promotions() {

    const promotions = useSelector(state => state.promotions);
    
    return (
        <div className={['wrapper', s.promotions_container].join(' ')}>
            <p className={s.subheader}>Promotions</p>
            <div className={s.products_card}>
                {
                    promotions.map(product => <Product key={product.id} {...product}/>)
                }
            </div>
        </div>
    )
}
