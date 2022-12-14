import React from 'react';
import FormButtonAuthentification from '../../components/FormButtonAuthentification';
import FormInputAuthentification from '../FormInputAuthentification';
import s from './style.module.sass';
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';

export default function FormItemAuthentification({title, button, info_text, form_type, info_text_additional, link}) {

    const location = useLocation();
    
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
            <p className={s.form_title}>{title}</p>
            <p className={s.info_text}>{info_text_additional}</p>
            
            <FormInputAuthentification
                {...email_register}
                placeholder='Email'
                name='email'
                type='email'/>
                
            <div>
                {errors?.email && <p>{errors?.email?.message}</p>}
            </div>

            {['registrations','login'].includes(form_type)
                ? <>
                <FormInputAuthentification
                    {...password_register}
                    placeholder='Password'
                    name='password'
                    type='password'
                />
                    <div>
                        {errors?.password && <p>{errors?.password?.message}</p>}
                    </div>
                    </>
                : ''
            }
            
            {
                form_type === 'login'
                    ? 
                    <Link to={'/reset_password'} state={{ background: '/' }}>
                        <p className={s.info_text}>{info_text}</p>
                    </Link>
                    : <p className={s.info_text}>{info_text}</p>
            }
            

            <FormButtonAuthentification color='green'>{button.submit}</FormButtonAuthentification>
            
            {['registrations','login'].includes(form_type)
                ?   <Link to={link} state={{ background: '/' }}>
                        <FormButtonAuthentification color='white'>{button.redirect}</FormButtonAuthentification>
                    </Link>
                    : ''
            }
        </form>
    )
}
