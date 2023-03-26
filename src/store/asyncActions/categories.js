import { load_categories_action } from '../reducer/categoriesReducer';
import {render_link} from './linkForBack';
    
export const loadCategories = () => {
    return async dispatch => {
        // const response = await fetch(' http://164.92.182.164:3333/categories/all');
        const response = await fetch(`${render_link}/categories/all`);
        const payload = await response.json();
        // console.log(payload);
        dispatch(load_categories_action(payload));
    }
}