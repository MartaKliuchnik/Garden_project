import React from 'react';
import ProductsContainer from '../../components/ProductsContainer';
import s from './style.module.sass';

export default function PageProducts() {
    return (
        <div className={s.wrapper}>
            <ProductsContainer/>
        </div>
    )
}
