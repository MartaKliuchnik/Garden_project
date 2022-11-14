import React, { useRef } from 'react';
import logo from './media/nav_logo.png';
import s from './style.module.sass';
import {MenuOutlined, ShoppingOutlined} from '@ant-design/icons';

export default function Nav() {

    const nav_list_ref = useRef();

    const nav_btn_click = () => {
        nav_list_ref.current.classList.toggle(s.active);
    }

    return (
        <div className={[s.header, 'wrapper'].join(' ')}>
            <div className={s.header_main}>
                <a  href="/"><img className={s.header_logo} src={logo} alt="icon_logo" /></a>
                <button className={s.btn_catalog}>Catalog</button>
            </div>
            <div className={s.header_menu}>
                <nav className={s.menu_body}>
                    <button onClick={nav_btn_click} className={s.burger_menu}><MenuOutlined className={s.icon_menu} /></button>
                    <ul ref={nav_list_ref} className={s.menu_list}>
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
