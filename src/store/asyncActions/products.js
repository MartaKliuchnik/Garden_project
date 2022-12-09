import { load_products_action } from '../reducer/productsReducer';
import { add_to_basket_action } from '../reducer/basketReducer';

export const loadProducts = (id) => {
    return async dispatch => {
        const response = await fetch('http://localhost:3333/products/all');
        const data = await response.json();
        console.log(data);
        const payload = data.filter(({ categoryId }) => categoryId === +id);
        dispatch(load_products_action(payload));
    }
}