import { get_description_action } from '../reducer/descriptionReducer';
import {render_link} from './linkForBack';

export const get_description_product = (id_prod) => {
    return async dispatch => {
        // const response = await fetch(' http://164.92.182.164:3333/products/all');
        const response = await fetch(`${render_link}/products/all`);
        const data = await response.json();
        const product = data.find(({ id }) => id === +id_prod);
        dispatch(get_description_action(product));
    }
}