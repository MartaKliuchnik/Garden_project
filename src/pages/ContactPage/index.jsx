import React from 'react';
import FormContact from '../../components/FormContact';
import s from './style.module.sass';

export default function ContactPage() {
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <div className={s.subheader}>
                <p className={s.title_subheader}>Contact</p>
                <p>Customer satisfaction is our number one priority, and accessibility is an important part of that. Choose your preferred way of communication and contact us. We are happy to help you.</p>
            </div>
            
            <div className={s.links_content}>
                <div className={s.maps}>
                <iframe src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=-73.949993%2C40.646806&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoyMjQwNTc3NjQwEjRVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EsIE5ldyBZb3JrLCBCcm9va2x5biBCb3JvdWdoIgoN8%2BmTwhVCmSJC&z=15.1" ></iframe>
                </div>
                <div className={s.info_text}>
                    <p>Our location</p>
                    <p>726 Sterling Pl, Brooklyn, NY 11222, USA</p>
                    <p>+61(0) 999 999 999</p>
                    <a href="#">gardentools@garden.com</a>
                </div>
            </div>
                <FormContact/>
        </div>
    )
}
