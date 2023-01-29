let defaultState = [];

const LOAD_RANDOM_PROMOTIONS = 'LOAD_RANDOM_PROMOTIONS';

export const load_random_promotions_action = (payload) => ({ type: LOAD_RANDOM_PROMOTIONS, payload});

const getRandomArray = (promotions) => {
    const random_promotions = [];
    const selectedIndices = {};

        while(random_promotions.length < 3){
            const index = Math.floor(Math.random()*promotions.length)
            if(typeof(selectedIndices[index])==='undefined'){
                random_promotions.push(promotions[index]);
                selectedIndices[index] = index;
            }
        }
        return [...random_promotions]
    }

export const promotionsRandomReducer = (state = defaultState, action) => {
    if (action.type === LOAD_RANDOM_PROMOTIONS) {
        return getRandomArray(action.payload)
    } else {
        return state
    }
}