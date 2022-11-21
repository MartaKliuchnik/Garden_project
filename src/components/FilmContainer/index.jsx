import React, { useContext } from 'react'
import { Context } from '../../context';
import AllCategories from '../AllCategories';
import s from './style.module.sass'

export default function FilmContainer() {

    const { slider_container } = useContext(Context);

    return (
        <div
            style={{left: 0}}
            className={s.container}
            ref={slider_container}>
            <AllCategories type='slider'/>
        </div>
    )
}
