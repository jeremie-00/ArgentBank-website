import { SET_TOKEN } from "../actions/post_action";

const initialState = {}

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN:
            return action.payload
        default:
            return state;
    }
    
}