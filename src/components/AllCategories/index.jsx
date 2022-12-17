import React  from 'react';
import { useContext } from 'react';
import { Context } from '../../context';
import Category from '../Category';
import s from './style.module.sass';


export default function AllCategories({type}) {

    const { categories } = useContext(Context);

    return (
        <div className={[s.categories_container, s[type]].join(' ')}>
            {
                categories.map(el => <Category key={el.id} {...el} type={type} />)
            }
        </div>
    )
}
