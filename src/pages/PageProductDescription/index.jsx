import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Description from '../../components/Description';
import {get_description_product} from '../../store/asyncActions/descriptionProduct'
// import { Context } from '../../context';

export default function ProductDescription() {

    // const { showProducts, setShowProducts } = useContext(Context);

    const {id_product} = useParams();

    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    
    useEffect(() => {
        dispatch(get_description_product(id_product))
    }, [])
    

    // useEffect(() => {
    //     const handler = async () => {
    //         const cur_id = +id;
    //         const response = await fetch(`http://localhost:3333/products/all`);
    //         const products = await response.json();
    //         setShowProducts(products.find(product => product.id === cur_id));
    //         console.log(products.find(product => product.id === cur_id))
    //     };
    //     handler();
    // }, [])

    return (
        <div>
            <Description product={product} />
        </div>
    )
}
