import React from 'react';
import FormButtonAuthentification from '../../components/FormButtonAuthentification';
import FormInputAuthentification from '../FormInputAuthentification';
import s from './style.module.sass';

export default function FormItemAuthentification() {
    return (
        <form className={s.form_item}>
            <p className={s.form_title}>Registration</p>
            <FormInputAuthentification placeholder='Email' name='email' type='email'/>
            <FormInputAuthentification placeholder='Password' name='password' type='password' />
            <p className={s.info_text}>By registering on the site, you agree to our Rules and Privacy Policy and agree to receive newsletters.</p>
            <FormButtonAuthentification color='green'>Registration</FormButtonAuthentification>
            <FormButtonAuthentification color='white'>Login</FormButtonAuthentification>
        </form>
    )
}
