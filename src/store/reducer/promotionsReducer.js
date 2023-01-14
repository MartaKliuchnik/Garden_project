let defaultState = [];

const LOAD_PROMOTIONS = 'LOAD_PROMOTIONS';
const LOAD_RANDOM_PROMOTIONS = 'LOAD_RANDOM_PROMOTIONS';

export const load_promotions_action = () => ({ type: LOAD_PROMOTIONS });
export const load_random_promotions_action = (payload) => ({ type: LOAD_RANDOM_PROMOTIONS, payload});

const getRandomArray = (products) => {
const promotions = [];
const selectedIndices = {};

    while(promotions.length < 3){
        const index = Math.floor(Math.random()*products.length)
        if(typeof(selectedIndices[index])==='undefined'){
            promotions.push(products[index]);
            selectedIndices[index] = index;
        }
    }
    return [...promotions]
}

export const promotionsReducer = (state = defaultState, action) => {
    if (action.type === LOAD_PROMOTIONS) {
        return [...defaultState]
    }
    else if (action.type === LOAD_RANDOM_PROMOTIONS) {
        defaultState = action.payload;
        return getRandomArray(action.payload)
    }
    else {
        return state
    }
}