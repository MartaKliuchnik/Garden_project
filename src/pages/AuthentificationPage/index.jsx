import React from 'react';
import FormItemAuthentification from '../../components/FormItemAuthentification';

export default function AuthentificationPage() {
    return (
        <div>
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

        </div>
    )
}
