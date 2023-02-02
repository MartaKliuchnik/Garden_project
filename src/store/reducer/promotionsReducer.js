let defaultState = [];

const LOAD_PROMOTIONS = 'LOAD_PROMOTIONS';
const SORT_PROMOTIONS = 'SORT_PROMOTIONS';
const PRISE_SEARCH_PROMOTIONS = 'PRISE_SEARCH_PROMOTIONS';
const WORD_SEARCH_PROMOTIONS = 'WORD_SEARCH_PROMOTIONS';
const RESET_PROMOTIONS = 'RESET_PROMOTIONS';

export const load_promotions_action = (payload) => ({ type: LOAD_PROMOTIONS, payload });
export const check_sort_promotions_action = (payload) => ({ type: SORT_PROMOTIONS, payload });
export const price_search_promotions_action = (payload) => ({ type: PRISE_SEARCH_PROMOTIONS, payload });
export const word_search_promotions_action = (payload) => ({ type: WORD_SEARCH_PROMOTIONS, payload });
export const reset_promotions_action = () => ({ type: RESET_PROMOTIONS });

export const promotionsReducer = (state = defaultState, action) => {
    if (action.type === LOAD_PROMOTIONS) {
        state = action.payload.map(promotions => {
            return {
                ...promotions,
                show_flg: true
            }
        });
        defaultState = state;
        return [...state]

    } else if (action.type === SORT_PROMOTIONS) {
        if (action.payload === 1) {
            return [...state.sort((a,b) => b.discont_price - a.discont_price)]
        } else if (action.payload === 2) {
            return [...state.sort((a, b) => a.discont_price - b.discont_price)]
        }

    } else if (action.type === PRISE_SEARCH_PROMOTIONS) {
        const { params, check_search } = action.payload;
        console.log(params);
        if(!check_search){
            return [...state.map(promotions => {
                promotions.show_flg = promotions.discont_price >= params.minInput && promotions.discont_price <= params.maxInput
            return promotions 
            })]
        } else {
            return [...state.map(promotions => {
                if(promotions.show_flg){
                    promotions.show_flg = promotions.discont_price >= params.minInput && promotions.discont_price <= params.maxInput
                }
                return promotions
            })]
        }

    } else if (action.type === WORD_SEARCH_PROMOTIONS) {
        const {params, check_search} = action.payload;
        if (!check_search){
            return [...state.map(promotions => {
                promotions.show_flg = promotions.title.toLowerCase().startsWith(params);
            return promotions
            })]
        } else {
            return [...state.map(promotions => {
                if (promotions.show_flg) {
                    promotions.show_flg = promotions.title.toLowerCase().startsWith(params);
                }
                return promotions
            })]
        }
    
    } else if (action.type === RESET_PROMOTIONS) {
        return defaultState
    
    } else {
        return state
    }
}