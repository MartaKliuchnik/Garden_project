import React from 'react';
import s from './style.module.sass';
import BackHome from '../../components/UI/BackHome'

export default function NotFoundPage() {
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <p className={s.warning}>Nothing found</p>
            <p className={s.text}>Sorry, but nothing matched for your search</p>
            <div className={s.btn_home}>
                <a href="/garden_project_main_page">
                    <BackHome>To home</BackHome>
                </a>
            </div>
        </div>
    )
}
