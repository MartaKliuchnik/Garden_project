import React, { useContext } from 'react';
import FilmContainer from '../FilmContainer';
import s from './style.module.sass';
import PageCategories from '../../pages/PageCategories';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Context } from '../../context';

export default function SliderContainer() {

    const { shift_left, shift_right } = useContext(Context);

    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <div className={s.block_subheader}>
                <p>Categories</p>
                <Link to='/all_categories' element={<PageCategories/>}><button>All categories</button></Link>
            </div>
            <div className={s.slider}>
                <div
                    className={[s.trigger, s.left].join(' ')}
                    // ref={left_trigger}
                    onClick={shift_left}
                >
                        <LeftCircleOutlined />
                </div>
                <div
                    className={[s.trigger, s.right].join(' ')}
                    // ref={right_trigger}
                    onClick={shift_right}
                >
                    <RightCircleOutlined />
                </div>
                <FilmContainer />
            </div>
        </div>
    )
}
