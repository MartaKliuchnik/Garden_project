import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.sass';
import BackHome from '../../components/UI/BackHome'

export default function NotFoundPage() {
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <p className={s.warning}>Nothing found</p>
            <p className={s.text}>Sorry, but nothing matched for your search</p>
            <div className={s.btn_home}>
                <Link to="/">
                    <BackHome>To home</BackHome>
                </Link>
            </div>
        </div>
    )
}
