import React from 'react';
import s from './style.module.sass'; 
import picture from './media/sale_image.png'
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { load_promotions_action } from '../../store/reducer/promotionsReducer';

export default function Sale() {

    const dispatch = useDispatch();

    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <div className={s.sale_container}>
                <div className={s.title}>
                    <p className={s.sale_p_elem}>Sale</p>
                    <p>for the new season</p>
                </div>
                <Link to='all_promotions_products' className={s.btn_container}>
                    <Button onClick={() => dispatch(load_promotions_action())}>All promotions</Button>
                </Link>
            </div>
            <div className={s.sale_picture}>
                <img src={picture} alt="sale_image_picture" />
            </div>
        </div>
    )
}