import { load_products_action } from '../reducer/productsReducer';
import { load_products_for_filtration_action } from '../reducer/filterReducer';
import { load_random_promotions_action } from '../reducer/randomPromotionsReducer';
import { load_promotions_action } from '../reducer/promotionsReducer';

export const loadProducts = (categoryId) => {
    return async dispatch => {
        const response = await fetch(`http://localhost:3333/categories/${categoryId}`);
        const data = await response.json();
        dispatch(load_products_action(data));
        dispatch(load_products_for_filtration_action(data));
    }
}

export const loadPromotionProducts = () => {
    return async dispatch => {
        const response = await fetch(`http://localhost:3333/products/all`);
        const data = await response.json();
        const products = data.filter(prod => prod.discont_price > 0);
        dispatch(load_promotions_action(products));
        dispatch(load_random_promotions_action(products));
    }
}