import React, { useEffect, useState } from 'react';
import s from './style.module.sass';
import Product from '../Product';
import { useParams } from 'react-router-dom';
import Filtration from '../Filtration';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../store/asyncActions/products';

export default function ProductsContainer() {
    
    const {id_category} = useParams();
    const dispatch = useDispatch();
    const showProducts = useSelector(state => state.filtration);
    
    useEffect(() => {
        dispatch(loadProducts(id_category))
    }, []);

    
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <div className={s.subheader}>
                <p>Инструменты и инвентарь</p>
            </div>
            <div className={s.filtration}>
                <Filtration/>
            </div>
            <div className={s.products_container}>
                {
                    showProducts.length === 0
                        ? <p>0 results for your query</p>
                        : showProducts.map(product => <Product key={product.id} {...product} />)
                }
            </div>
        </div>
    )
}
