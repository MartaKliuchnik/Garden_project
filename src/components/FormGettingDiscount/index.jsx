import React from 'react';
import s from './style.module.sass'

export default function FormGettingDiscount() {
  return (  
    <form className={s.form_container}>
      <input type="tel" placeholder='333-444-5555' title='phone' maxLength={14}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required />
      <button>Get a discount</button>
    </form>
    
  )
}
