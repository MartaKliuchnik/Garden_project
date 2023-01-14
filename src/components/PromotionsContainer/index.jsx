import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './style.module.sass';
import Filtration from '../Filtration';
import Product from '../Product';
import { useEffect } from 'react';
import { load_promotions_action } from '../../store/reducer/promotionsReducer';

export default function PromotionsContainer() {
    const promotions = useSelector(state => state.promotions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(load_promotions_action())
    }, []);
    
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <div className={s.filtration}>
				<Filtration />
            </div>
            <div className={s.products_container}>
                {
                    promotions.map(prom => <Product key={prom.id} {...prom} />)
                }
            </div>
        </div>
    )
}
