const defaultState = [];

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

export const load_products_action = (payload) => ({ type: LOAD_PRODUCTS, payload });

export const productsReducer = (state = defaultState, action) => {
    if (action.type === LOAD_PRODUCTS) {
        return action.payload
    } else {
        return state
    }
}