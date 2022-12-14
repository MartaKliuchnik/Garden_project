import React from 'react';
import FormButtonAuthentification from '../../components/FormButtonAuthentification';
import FormInputAuthentification from '../FormInputAuthentification';
import s from './style.module.sass';
import { useForm } from 'react-hook-form';

export default function FormItemAuthentification() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur'
    });
    
    const submit = (data) => {
        console.log(data)
    }

    const email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const password_regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    const email_register = register('email', {
        required: '*required field',
        pattern: {
            value: email_regex,
            message: '*not valid email format'
        }
    });
    
    const password_register = register('password', {
        required: '*required field',
        pattern: {
            value: password_regex,
            message: '*you password shoult contain minimum eight characters, at least one letter, one number and special character'
        } 
    });

    return (
        <form className={s.form_item} onSubmit={handleSubmit(submit)}>
            <p className={s.form_title}>Registration</p>
            <FormInputAuthentification
                {...email_register}
                placeholder='Email'
                name='email'
                type='email' />
            
            <div>
                {errors?.email && <p>{errors?.email?.message}</p>}
            </div>

            <FormInputAuthentification
                {...password_register}
                placeholder='Password'
                name='password'
                type='password' />
            
            <div>
                {errors?.password && <p>{errors?.password?.message}</p>}
            </div>
            
            <p className={s.info_text}>By registering on the site, you agree to our Rules and Privacy Policy and agree to receive newsletters.</p>
            <FormButtonAuthentification color='green'>Registration</FormButtonAuthentification>
            <FormButtonAuthentification color='white'>Login</FormButtonAuthentification>
        </form>
    )
}
