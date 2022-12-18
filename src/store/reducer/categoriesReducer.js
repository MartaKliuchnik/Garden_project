// const read_local = () => JSON.parse(localStorage.getItem('categories')) ?? [];
// const write_local = (state) => localStorage.setItem('categories', JSON.stringify(state));
    
const defaultState = [];

const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const load_categories_action = (payload) => ({ type: LOAD_CATEGORIES, payload });

export const categoriesReducer = (state = defaultState, action) => {
    if (action.type === LOAD_CATEGORIES) {
        // write_local(action.payload)
        return action.payload
    } else {
        return state
    }
}