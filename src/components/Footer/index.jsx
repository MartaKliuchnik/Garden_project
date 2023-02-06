import React from 'react';
import s from './style.module.sass';

export default function Footer() {
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <div className={s.footer_text}>
                <p>© 2022 - GardenTools. All Rights Reserved.</p>
            </div>
        </div>
    )
}
