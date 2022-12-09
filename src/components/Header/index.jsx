import React, { useRef } from 'react';
import logo from './media/nav_logo.png';
import s from './style.module.sass';
import { MenuOutlined, ShoppingOutlined, CloseOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

export default function Nav() {

    const nav_list_ref = useRef();
    const nav_btn = useRef();

    const nav_btn_click = () => {
        nav_list_ref.current.classList.toggle(s.active_link);
        nav_btn.current.classList.toggle(s.active);
    }

    const checkClass = ({isActive}) => isActive ? s.active : ''

    return (
        <div className={[s.header, 'wrapper'].join(' ')}>
            <div className={s.header_main}>
                <a  href="/"><img className={s.header_logo} src={logo} alt="icon_logo" /></a>
                <button className={s.btn_catalog}>Catalog</button>
            </div>
            <div className={s.header_menu} >
                <nav className={s.menu_body}>
                    <button onClick={nav_btn_click} className={s.burger_menu} ref={nav_btn}>
                        <MenuOutlined className={s.icon_burger}/>
                        <CloseOutlined className={s.icon_close}/>
                    </button>
                    <div ref={nav_list_ref} className={s.menu_list} onClick={nav_btn_click}>
                        <NavLink className={checkClass} to='all_categories'>Categories</NavLink>
                        <NavLink className={checkClass} to='basket'>Coupon</NavLink>
                        {/* <NavLink className={checkClass} to='all_products'>Promotions</NavLink> */}
                        <a href="#contacts">Contacts</a>
                    </div>
                </nav>
                <NavLink className={checkClass} to='/basket'><ShoppingOutlined className={s.icon_bag} /></NavLink> 
            </div>
        </div>
    )
}
