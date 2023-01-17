import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../Product';
import s from './style.module.sass';


export default function RandomPromotions() {
    const promotions = useSelector(state => state.randomPromotions);
    
    return (
        
        <div className={['wrapper', s.promotions_container].join(' ')}>
            <p className={s.subheader}>Promotions</p>
            <div className={s.products_card}>
                {
                    promotions.map(promotion => <Product key={promotion.id} {...promotion} />)
                }
            </div>
        </div>
    )
}
