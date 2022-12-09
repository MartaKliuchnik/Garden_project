const defaultState = {};

export const GET_DESCRIPTION = 'GET_DESCRIPTION';
export const get_description_action = (payload) => ({ type: GET_DESCRIPTION, payload });

export const descriptionReducer = (state = defaultState, action) => {
    if (action.type === GET_DESCRIPTION) {
        return action.payload
    } else {
        return state
    }
}