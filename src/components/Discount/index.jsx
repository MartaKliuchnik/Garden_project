import React from 'react';
import s from './style.module.sass';
import picture_gnome from './media/gnome.png';

export default function Discount() {
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <div className={s.picture_block}>
                <img src={picture_gnome} alt="gnome_picture" />
            </div>
            <div className={s.discount_info}>
                <div className={s.discount_subheader}>
                    <h2>Скидка 5%</h2>
                    <p>на первый заказ</p>
                </div>
                <div className={s.discount_form}>
                    
                </div>
            </div>
        </div>
    )
}
