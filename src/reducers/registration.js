import {REGISTRATION} from '../actions';

const initialState = {
    isLoggedIn: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTRATION:
            return {isLoggedIn: true}
        default: 
            return state
    }
}