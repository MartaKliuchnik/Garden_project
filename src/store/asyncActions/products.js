import { load_products_action } from '../reducer/productsReducer';
import { load_products_for_filtration_action } from '../reducer/filterReducer';

export const loadProducts = (id) => {
    return async dispatch => {
        const response = await fetch('http://localhost:3333/products/all');
        const data = await response.json();
        const payload = data.filter(({ categoryId }) => categoryId === +id);
        dispatch(load_products_action(payload));
        dispatch(load_products_for_filtration_action(payload));
    }
}