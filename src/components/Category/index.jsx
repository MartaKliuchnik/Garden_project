import React from 'react';
import picture from '../Category/media/category_1.png';
import s from './style.module.sass'

export default function Category({title}) {
    return (
        <div className={s.category_container}>
            <div className={s.photo_category_container}>
                <img src={picture} alt="photo_category" />
            </div>
            <p>{title}</p>
        </div>
    )
}
