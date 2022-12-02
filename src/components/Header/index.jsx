import React, { useRef } from 'react';
import logo from './media/nav_logo.png';
import s from './style.module.sass';
import { MenuOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function Nav() {

    const nav_list_ref = useRef();

    const nav_btn_click = () => {
        nav_list_ref.current.classList.toggle(s.active)
    }
    
    const nav_btn_click_clear = () => {
        nav_list_ref.current.classList.remove(s.active)
    }

    return (
        <div className={[s.header, 'wrapper'].join(' ')}>
            <div className={s.header_main}>
                <a  href="/"><img className={s.header_logo} src={logo} alt="icon_logo" /></a>
                <button className={s.btn_catalog}>Catalog</button>
            </div>
            <div className={s.header_menu} onDoubleClick={nav_btn_click_clear}>
                <nav className={s.menu_body}>
                    <button onClick={nav_btn_click} className={s.burger_menu}><MenuOutlined className={s.icon_menu} /></button>
                    <ul ref={nav_list_ref} className={s.menu_list}>
                        <li><Link to='/all_categories'>Categories</Link></li>
                        <li>Coupon</li>
                        <li><Link to='all_products'>Promotions</Link></li>
                        <li><a href="#contacts">Contacts</a></li>
                    </ul>
                </nav>
                <Link to='/basket'><ShoppingOutlined className={s.icon_bag} /></Link> 
            </div>
        </div>
    )
}
