import React from 'react';
import s from './style.module.sass'

export default function FormButtonAuthentification({children, color}) {
    return (
        <button className={[s.form_btn, s[color]].join(' ')}>{children}</button>
    )
}
