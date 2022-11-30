import React from 'react';
import s from './style.module.sass';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BasketCard from '../BasketCard';
import { RightOutlined } from '@ant-design/icons';
import OrderForm from '../UI/OrderForm';


export default function Basket() {

    const products_basket = useSelector(state => state);
    
    const products_array = products_basket.map(product => <BasketCard key={product.id} {...product} />)
    const empty_basket =
        <div className={s.empty_basket_container}>
            <p>Basket is empty</p>
        </div>
    
    const total_price_order = products_basket.reduce((total_price, { price, discont_price, count }) => 
        discont_price === 0.75
            ? total_price + price * count
            : total_price + discont_price * count
        , 0)


    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <div className={s.subheader}>
                <p>Basket</p>
                <Link to='/all_categories'>Back to shop <RightOutlined className={s.icon_right} /></Link>
            </div>
            <div className={s.basket_container}>
                <div className={s.orders}>
                    {
                        products_basket.length === 0
                            ? empty_basket
                            : products_array
                    }   
                </div>
                {
                    products_basket.length === 0
                ? ''    
                : <div className={s.order_detail_container}>
                    <p>Order Details</p>
                    <div className={s.price_container}>
                        <p>Price:</p>
                        <p className={s.price}>{total_price_order} €</p>
                    </div>
                    <OrderForm/>
                </div>
                }               
            </div>
        </div>
    )
}
