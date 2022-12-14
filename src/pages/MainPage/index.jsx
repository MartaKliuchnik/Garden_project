import React from 'react';
import Sale from '../../components/Sale';
import Discount from '../../components/Discount';
import SliderContainer from '../../components/SliderContainer';


export default function MainPage() {
    return (
        <div>
            <Sale />
            <SliderContainer />
            <Discount />
        </div>
    )
}
