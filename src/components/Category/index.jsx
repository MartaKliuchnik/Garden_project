import React from 'react';
import { useContext } from 'react';
import { Context } from '../../context';
import picture from '../Category/media/category_1.png';
import s from './style.module.sass';
import { Link } from 'react-router-dom';


export default function Category({ id, title }) {
    
    // const { get_products_category, setShowProducts } = useContext(Context);
    
    const link = `categories/${id}`;

    return (
        <Link to={link} className={s.category_container}>
            <div className={s.photo_category_container}>
                <img src={picture} alt="photo_category" />
            </div>
            <p>{title}</p>
        </Link>
    )
}
