import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from 'react-router-dom';
import ButtonQuickNav from '../../components/UI/ButtonQuickNav';
import s from './style.module.sass';


export default function Layout() {

    window.addEventListener('scroll', function(ev) {
        const header = document.getElementById('top');
        const btn = document.getElementById('btn_scroll');
        var distanceToTop = header.getBoundingClientRect().top;
        if (distanceToTop <= -300) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
});

    
    return (
        <>
            <Header />
            <Outlet/>
            <Footer />
            <div id='btn_scroll' className={'wrapper'}>
                <ButtonQuickNav/>
            </div>
        </>
    )
}
