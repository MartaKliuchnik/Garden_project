const defaultState = [];

const LOAD_PROMOTIONS = 'LOAD_PROMOTIONS';

export const load_promotions_action = (payload) => ({ type: LOAD_PROMOTIONS, payload });

const getRandomArray = (products) => {
const promotions = [];
const selectedIndices = {};

while(promotions.length < 3){
    const index = Math.floor(Math.random()*products.length)
    if(typeof(selectedIndices[index])==='undefined'){
        promotions.push(products[index])
        selectedIndices[index] = index
    }
}
return [...promotions]
}


export const promotionsReducer = (state = defaultState, action) => {
    if (action.type === LOAD_PROMOTIONS) {
        return getRandomArray(action.payload)
    } else {
        return state
    }
}