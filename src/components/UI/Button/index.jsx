import React from 'react';
import s from './style.module.sass';

export default function Button({children, ...props}) {
    return (
        <button {...props} className={s.btn}>{children}</button>
    )
}
