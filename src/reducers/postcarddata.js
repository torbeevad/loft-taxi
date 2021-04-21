import {POST_CARD_DATA_ACTION} from '../actions';

const initialState = {
    isLoggedIn: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case POST_CARD_DATA_ACTION:
            return {isLoggedIn: true}
        default:
            return state
    }
}