import React from 'react';
import Sale from '../../components/Sale';
import Discount from '../../components/Discount';
import SliderContainer from '../../components/SliderContainer';
import RandomPromotions from '../../components/RandomPromotions';


export default function MainPage() {

    return (
        <div>
            <Sale />
            <SliderContainer />
            <Discount />
            <RandomPromotions/>
        </div>
    )
}
