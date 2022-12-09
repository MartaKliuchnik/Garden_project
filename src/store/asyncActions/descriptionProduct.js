import { get_description_action } from '../reducer/descriptionReducer';

export const get_description_product = (id_prod) => {
    return async dispatch => {
        const response = await fetch('http://localhost:3333/products/all');
        const data = await response.json();
        const product = data.find(({ id }) => id === +id_prod);
        dispatch(get_description_action(product));
    }
}