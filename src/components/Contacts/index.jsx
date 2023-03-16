import React from 'react';
import s from './style.module.sass';
import { InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';

export default function Contacts() {
    return (
        <div className={['wrapper', s.footer_contact].join(' ')}>
        <p>Available every weekday from 8:00 to 18:00</p>
        
        <div className={s.social_network_icons}>
            <a href='https://www.instagram.com/' className={s.instagram_icon}>
                <InstagramOutlined />
                <p>Instagram</p>
            </a>
            <a href='https://web.whatsapp.com/' className={s.whats_up_icon}>
                <WhatsAppOutlined />
                <p>WhatsApp</p>
            </a>
        </div>
    </div>
    )
}
