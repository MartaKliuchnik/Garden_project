import React from 'react';
import s from './style.module.sass';

export default function Address() {
    return (
        <div className={s.wrapper}>
            <h2>Address</h2>
            <p className={s.style_address}>Cosmonauts Proezd Kosmonavtov, 11</p>
            <p className={s.style_mode}>Operation mode</p>
            <p className={s.style_around_the_clock}>Around the clock</p>
        </div>
    )
}
