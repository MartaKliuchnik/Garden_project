import React, { useContext } from 'react';
import { Context } from '../../context';
import Category from '../Category';
import s from './style.module.sass'

export default function CategoriesContainer() {

  const { categories } = useContext(Context);
  console.log(categories);

  return (
    <div className={['wrapper', s.wrapper].join(' ')}>
      <p className={s.subheader}>Categories</p>
      <div className={s.categories_container}>
        {
          categories.map(el => <Category key={el.id} {...el}/>)
        }
      </div>
    </div>
  )
}
