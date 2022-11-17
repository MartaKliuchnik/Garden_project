import React from 'react';
import s from './style.module.sass';
import picture_gnome from './media/gnome.png';
import FormGettingDiscount from '../FormGettingDiscount'

export default function Discount() {
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <div className={s.picture_block}>
                <img src={picture_gnome} alt="gnome_picture" />
            </div>
            <div className={s.discount_info}>
                <div className={s.discount_subheader}>
                    <p className={s.p_discount}>Discount 5%</p>
                    <p>for the first order</p>
                </div>
                <div className={s.discount_form}>
                    <FormGettingDiscount/>
                </div>
            </div>
        </div>
    )
}
