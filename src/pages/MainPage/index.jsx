import React from 'react';
import Sale from '../../components/Sale';
import Discount from '../../components/Discount';
import SliderContainer from '../../components/SliderContainer';
import Promotions from '../../components/Promotions';


export default function MainPage() {
    return (
        <div>
            <Sale />
            <SliderContainer />
            <Discount />
            <Promotions/>
        </div>
    )
}
