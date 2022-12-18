import { load_products_action } from '../reducer/productsReducer';
import { load_products_for_filtration_action } from '../reducer/filterReducer';
import { load_promotions_action } from '../reducer/promotionsReducer';

const read_local = () => JSON.parse(localStorage.getItem('categoryIdLocal')) ?? '';
const write_local = (id_cat) => localStorage.setItem('categoryIdLocal', JSON.stringify(id_cat));

const defaultCategoryId = read_local();

export const loadProducts = (id) => {
    write_local(+id);

    return async dispatch => {
        const response = await fetch('http://localhost:3333/products/all');
        const data = await response.json();

        const payload = data.filter(({ categoryId }) => categoryId === defaultCategoryId);
        dispatch(load_products_action(payload));
        dispatch(load_products_for_filtration_action(payload));
        dispatch(load_promotions_action(data));
    }
}