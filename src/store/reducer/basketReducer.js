const defaultState = [];

const ADD_TO_BASKET = 'ADD_TO_BASKET';

export const addToBasket = (payload) => ({ type: ADD_TO_BASKET, payload });
    
export const basketReducer = (state = defaultState, action) => {
    if (action.type === ADD_TO_BASKET) {
        return [...state, { ...action.payload }]
    } else {
        return state
    }
}