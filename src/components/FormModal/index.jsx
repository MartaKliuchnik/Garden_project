import React from 'react';
import s from './style.module.sass';
import { CloseOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { Context } from '../../context';
import FormItemAuthentification from '../../components/FormItemAuthentification';

export default function FormModal() {
    const { modalActive,setModalActive } = useContext(Context);

    return (
        <div className={[s.modal, (modalActive ? s.active : '')].join(' ')}>
            <div className={s.modal_content}>
                <CloseOutlined className={s.close_icon}
                    onClick={() => setModalActive(false)}
                />
                
                <FormItemAuthentification
                title={'Registration'}
                button={{ submit: 'Registration', redirect: 'Login' }}
                info_text={'By registering on the site, you agree to our Rules and Privacy Policy and agree to receive newsletters.'}
                form_type = {'registrations'}
                />

                <FormItemAuthentification
                title={'Login'}
                button={{ submit: 'Login', redirect: 'Registration' }}
                info_text={'Restore password'}
                form_type = {'login'}
                />

                <FormItemAuthentification
                title={'Reset password'}
                button={{ submit: 'Reset'}}
                info_text={'The temporary password is valid for 24 hours.'}
                form_type={'reset_password'}
                info_text_additional={'To receive a temporary password, you must enter the email address you provided during registration.'}
                />

            </div>
        </div>
    )
}
