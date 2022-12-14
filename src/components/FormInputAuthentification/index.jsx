import React from 'react';
import s from './style.module.sass'

export default function FormInputAuthentification(props) {
    return (
        <input {...props} className={s.form_input} />
    )
}
