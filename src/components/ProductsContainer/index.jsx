import React, { useEffect} from 'react';
import s from './style.module.sass';
import Product from '../Product';
import { useParams } from 'react-router-dom';
import Filtration from '../Filtration';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../store/asyncActions/products';
import { useContext } from 'react';
import { Context } from '../../context';


export default function ProductsContainer() {
    
    const {id_category} = useParams();
    const dispatch = useDispatch();
    const showProducts = useSelector(state => state.filtration);

    const { categories } = useContext(Context);
    const current_category = categories.find(el => el.id === +id_category);
    
    useEffect(() => {
        dispatch(loadProducts(id_category));
    }, []);
    
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <div className={s.subheader}>
                <p>{current_category?.title}</p>
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
