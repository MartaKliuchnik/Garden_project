import React from 'react';
import s from './style.module.sass';
import { ArrowUpOutlined } from '@ant-design/icons';

export default function ButtonQuickNav() {
    return (
        <button className={s.btn_quick_nav}><a href="#top"><ArrowUpOutlined /></a></button>
    )
}
