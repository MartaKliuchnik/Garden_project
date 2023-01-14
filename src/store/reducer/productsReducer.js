const read_local = () => JSON.parse(localStorage.getItem('products')) ?? [];
const write_local = (state) => localStorage.setItem('products', JSON.stringify(state));

const defaultState = read_local();

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

export const load_products_action = (payload) => ({ type: LOAD_PRODUCTS, payload });

export const productsReducer = (state = defaultState, action) => {
    if (action.type === LOAD_PRODUCTS) {
        state = action.payload
        write_local(state)
        return state
    } else {
        return state
    }
}