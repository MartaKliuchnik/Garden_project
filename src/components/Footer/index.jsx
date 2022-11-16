import React from 'react';
import Address from '../Address';
import Contacts from '../Contacts';
import s from './style.module.sass';

export default function Footer() {
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <Contacts />
            <Address/>
        </div>
    )
}
