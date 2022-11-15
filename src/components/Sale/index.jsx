import React from 'react';
import s from './style.module.sass'; 
import picture from './media/sale_image.png'
import Button from '../UI/Button';

export default function Sale() {
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <div className={s.sale_container}>
                <div className={s.title}>
                    <p className={s.sale_p_elem}>Sale</p>
                    <p>for the new season</p>
                </div>
                <div className={s.btn_container}>
                    <Button>All promotions</Button>
                    <Button>More</Button>
                </div>
            </div>
            <div className={s.sale_picture}>
                <img src={picture} alt="sale_image_picture" />
            </div>
        </div>
    )
}