let defaultState = [];

const LOAD_PROMOTIONS = 'LOAD_PROMOTIONS';
const SORT = 'SORT';
const PRISE_SEARCH = 'PRISE_SEARCH';
const WORD_SEARCH = 'WORD_SEARCH';
const RESET = 'RESET';

export const load_promotions_action = (payload) => ({ type: LOAD_PROMOTIONS, payload });
export const sort_action = (payload) => ({ type: SORT, payload });
export const price_search_action = (payload) => ({ type: PRISE_SEARCH, payload });
export const word_search_action = (payload) => ({ type: WORD_SEARCH, payload });
export const reset_action = (payload) => ({ type: RESET, payload });

export const promotionsReducer = (state = defaultState, action) => {
    if (action.type === LOAD_PROMOTIONS) {
        defaultState = action.payload;
        state = action.payload.map(promotion => {
            return {
                ...promotion,
                show_flg: true
            }
        });
        console.log(state);
        return [...state]

    } else if (action.type === SORT) {
        if (action.payload === 1) {
            return [...state.sort((a,b) => b.discont_price - a.discont_price)]
        } else if (action.payload === 2) {
            return [...state.sort((a, b) => a.discont_price - b.discont_price)]
        }

    } else if (action.type === PRISE_SEARCH) {
        return [...state.map(promotion => {
            promotion.show_flg = promotion.discont_price >= action.payload.min && promotion.discont_price <= action.payload.max
            return promotion
        })]

    } else if (action.type === WORD_SEARCH) {
        console.log(action.payload)
        return [...state.map(promotion => {
            if (promotion.show_flg) {
                promotion.show_flg = promotion.title.toLowerCase().startsWith(action.payload)
            }
            return promotion
        })]
    
    } else if (action.type === RESET) {
        return defaultState
    
    } else {
        return state
    }
}