import { load_products_action } from '../reducer/productsReducer';
import { load_random_promotions_action } from '../reducer/randomPromotionsReducer';
import { load_promotions_action } from '../reducer/promotionsReducer';
import {render_link} from './linkForBack';

export const loadProducts = (categoryId) => {
    return async dispatch => {
        // const response = await fetch(`http://164.92.182.164:3333/categories/${categoryId}`);
        const response = await fetch(`${render_link}/categories/${categoryId}`);
        const data = await response.json();
        dispatch(load_products_action(data));
    }
}

export const loadPromotionProducts = () => {
    return async dispatch => {
        // const response = await fetch(`http://164.92.182.164:3333/products/all`);
        const response = await fetch(`${render_link}/products/all`);
        const data = await response.json();
        const products = data.filter(prod => prod.discont_price > 0);
        dispatch(load_promotions_action(products));
        dispatch(load_random_promotions_action(products));
    }
}

