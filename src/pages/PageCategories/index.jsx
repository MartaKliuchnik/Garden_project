import React from 'react';
import CategoriesContainer from '../../components/CategoriesContainer';
import s from './style.module.sass';

export default function PageCategories() {
    return (
        <div className={s.wrapper}>
            <CategoriesContainer/>
        </div>
    )
}
