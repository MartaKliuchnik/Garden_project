import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Description from '../../components/Description';
import { get_description_product } from '../../store/asyncActions/descriptionProduct';

export default function ProductDescription() {

    const {id_product} = useParams();

    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    
    useEffect(() => {
        dispatch(get_description_product(id_product))
    }, [])

    return (
        <div>
            <Description product={product} />
        </div>
    )
}
