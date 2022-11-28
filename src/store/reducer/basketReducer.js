const defaultState = [];

const ADD_TO_BASKET = 'ADD_TO_BASKET';
const DELETE_BASKET_CARD = 'DELETE_BASKET_CARD';

export const addToBasket = (payload) => ({ type: ADD_TO_BASKET, payload });
export const deleteBasketCard = (payload) => ({ type: DELETE_BASKET_CARD, payload })
    
export const basketReducer = (state = defaultState, action) => {
    if (action.type === ADD_TO_BASKET) {
        return [...state, { ...action.payload }]
    } else if (action.type === DELETE_BASKET_CARD) {
        return state.filter(product => product.id !== action.payload)
    } else {
        return state
    }
}