import React from 'react';
import s from './style.module.sass';
import Product from '../Product';
import { useContext } from 'react';
import { Context } from '../../context';
import Filtration from '../Filtration';

export default function ProductsContainer() {
    const { showProducts } = useContext(Context);
    
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
                    showProducts.map(product => <Product key={product.id} {...product} />)
                }
            </div>
        </div>
    )
}
