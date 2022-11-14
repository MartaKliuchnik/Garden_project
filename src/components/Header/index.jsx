import React from 'react';
import logo from './media/nav_logo.png';
import bag from './media/nav_bag.png';
import s from './style.module.sass';
import {MenuOutlined, ShoppingOutlined} from '@ant-design/icons';

export default function Nav() {
    return (
        <div className={[s.header, 'wrapper'].join(' ')}>
            <div className={s.header_main}>
                <a  href="/"><img className={s.header_logo} src={logo} alt="icon_logo" /></a>
                <button className={s.btn_catalog}>Catalog</button>
            </div>
            <div className={s.header_menu}>
                <nav className={s.menu_body}>
                    <button className={s.burger_menu}><MenuOutlined className={s.icon_menu} /></button>
                    <ul className={s.menu_list}>
                        <li>Categories</li>
                        <li>Coupon</li>
                        <li>Promotions</li>
                        <li>Contacts</li>
                    </ul>
                </nav>
                <button><ShoppingOutlined className={s.icon_bag} /></button>
                
            </div>
        </div>
    )
}
