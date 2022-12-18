const read_local = () => JSON.parse(localStorage.getItem('basket')) ?? [];
const save_local = (state) => localStorage.setItem('basket', JSON.stringify(state));

const defaultState = read_local();

const ADD_TO_BASKET = 'ADD_TO_BASKET';
const DELETE_BASKET_CARD = 'DELETE_BASKET_CARD';
const INCREMENT_COUNT = 'INCREASE_COUNT';
const DECREMENT_COUNT = 'DECREASE_COUNT';
const CLEAR_BASKET = 'CLEAR_BASKET';

export const add_to_basket_action = (payload) => ({ type: ADD_TO_BASKET, payload });
export const delete_basket_card_action = (payload) => ({ type: DELETE_BASKET_CARD, payload });
export const increment_count_product_at_the_basket_action = (payload) => ({ type: INCREMENT_COUNT, payload });
export const decrement_count_product_at_the_basket_action = (payload) => ({ type: DECREMENT_COUNT, payload });
export const clear_basket_action = () => ({ type: CLEAR_BASKET });

const checkCard = (state, product) => {
    const productInState = state.find(({ id }) => id === product.id);
    if (productInState) {
        productInState.count++;
        save_local(state)
        return [...state]
    } else {
        state = [...state, {
            ...product,
            count: 1
        }];
        save_local(state)
        return [...state]
    }
}

const increment = (state, payload) => {
    const current_product = state.find(({ id }) => id === payload);
    current_product.count++;
    save_local(state);
    return [...state]
}

const decrement = (state, payload) => {
    const current_product = state.find(({ id }) => id === payload);
    if (current_product.count === 1) {
        state = state.filter(({ id }) => id !== payload);
        save_local(state);
        return [...state]
    } else {
        current_product.count--;
        save_local(state);
        return [...state]
    }
}

export const basketReducer = (state = defaultState, action) => {
    if (action.type === ADD_TO_BASKET) {
        return checkCard(state, action.payload)
    } else if (action.type === DELETE_BASKET_CARD) {
        state = state.filter(product => product.id !== action.payload)
        save_local(state)
        return state
    } else if (action.type === INCREMENT_COUNT) {
        return increment(state, action.payload)
    } else if (action.type === DECREMENT_COUNT) {
        return decrement(state, action.payload)
    } else if (action.type === CLEAR_BASKET) {
        state = [];
        save_local(state)
        return [...state]
    } else {
        return state
    }
}