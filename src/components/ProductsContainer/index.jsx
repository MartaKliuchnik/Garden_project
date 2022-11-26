import React from 'react';
import s from './style.module.sass';
import Product from '../Product';
import { useContext } from 'react';
import { Context } from '../../context';

export default function ProductsContainer() {
    const { products } = useContext(Context);
    
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <div className={s.subheader}>
                <p>Инструменты и инвентарь</p>
            </div>
            <div className={s.filtration}>
                
            </div>
            <div className={s.products_container}>
                {
                    products.map(product => <Product key={product.id} {...product} />)
                }
            </div>
        </div>
    )
}
