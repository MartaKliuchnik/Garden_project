import React from 'react';
import s from './style.module.sass';
import { CloseOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { Context } from '../../context';
import FormItemAuthentification from '../../components/FormItemAuthentification';

export default function FormModal({ type_form }) {
    const { modalActive, setModalActive } = useContext(Context);

    return (
        <div className={[s.modal, (modalActive ? s.active : '')].join(' ')}>
            <div className={s.modal_content}>
                <CloseOutlined className={s.close_icon}
                    onClick={() => setModalActive(false)}
                />
                
                <div className={[s.form_registrations_container,
                    type_form === 'registration' ? s.active : ''].join(' ')}>
                    <FormItemAuthentification
                        title={'Registration'}
                        button={{ submit: 'Registration', redirect: 'Login' }}
                        info_text={'By registering on the site, you agree to our Rules and Privacy Policy and agree to receive newsletters.'}
                        form_type={'registrations'}
                        link={'/login'}
                />
                </div>

                <div className={[s.form_login_container,
                type_form === 'login' ? s.active : ''].join(' ')}>
                    <FormItemAuthentification
                        title={'Login'}
                        button={{ submit: 'Login', redirect: 'Registration' }}
                        info_text={'Restore password'}
                        form_type={'login'}
                        link={'registration'}
                    />
                </div>
                
                <div className={[s.form_reset_password_container,
                type_form === 'reset_password' ? s.active : ''].join(' ')}>
                    <FormItemAuthentification
                        title={'Reset password'}
                        button={{ submit: 'Reset'}}
                        info_text={'The temporary password is valid for 24 hours.'}
                        form_type={'reset_password'}
                        info_text_additional={'To receive a temporary password, you must enter the email address you provided during registration.'}
                    />
                </div>
                
            </div>
        </div>
    )
}
