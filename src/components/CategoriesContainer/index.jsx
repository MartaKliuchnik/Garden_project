import React from 'react';
import AllCategories from '../AllCategories';
import s from './style.module.sass'

export default function CategoriesContainer() {

  return (
    <div className={['wrapper', s.wrapper].join(' ')}>
      <p className={s.subheader}>Categories</p>
      <div>
        <AllCategories type='block'/>
      </div>
    </div>
  )
}
