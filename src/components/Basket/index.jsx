import React from 'react';
import s from './style.module.sass';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BasketCard from '../BasketCard';
import { RightOutlined } from '@ant-design/icons';

export default function Basket() {

    const products_basket = useSelector(state => state);

    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <div className={s.subheader}>
                <p>Basket</p>
                <Link to='/all_categories'>Back to shop <RightOutlined className={s.icon_right} /></Link>
            </div>
            <div className={s.basket_container}>
                <div className={s.orders}>
                    {
                        products_basket.map(product => <BasketCard key={product.id} {...product} />)
                    }
                </div>
                <div className={s.order_detail_container}>
                    <p>Order Details</p>
                    <p>Price:</p>
                    <form>
                        <input type="phone" placeholder='Your phone number' name='phone' />
                        <button>Order</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
