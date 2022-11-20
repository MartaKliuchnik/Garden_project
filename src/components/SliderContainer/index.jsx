import React from 'react';
import FilmContainer from '../FilmContainer';
import s from './style.module.sass';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'


export default function SliderContainer() {
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <div className={s.block_subheader}>
                <p>Categories</p>
                <button>All categories</button>
            </div>
            <div className={s.slider}>
                <div
                    className={[s.trigger, s.left].join(' ')}>
                        <LeftCircleOutlined />
                </div>
                <div
                    className={[s.trigger, s.right].join(' ')}>
                    <RightCircleOutlined />
                </div>
                <FilmContainer/>
            </div>
        </div>
    )
}
