import React from 'react';
import Contacts from '../Contacts';
import s from './style.module.sass';

export default function Footer() {
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <Contacts/>
        </div>
    )
}
