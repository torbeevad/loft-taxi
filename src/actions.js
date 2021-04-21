export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";

export const logIn = () => ({type: LOG_IN});
export const logOut = () => ({type: LOG_OUT});
export const authenticate = (email, password) => ({
    type: AUTHENTICATE,
    payload: {email, password},
});

export const REGISTRATION = "REGISTRATION";

export const registration = (email, password, name, surname) => ({
    type: REGISTRATION,
    payload: {email, password, name, surname}
})

export const POST_CARD_DATA_ACTION = "POST_CARD_DATA_ACTION";

export const postCardDataAction = (cardNumber, expiryDate, cardName, cvc) => ({
    type: POST_CARD_DATA_ACTION,
    payload: {cardNumber, expiryDate, cardName, cvc}
})

export const GET_ADDRESS_LIST = "GET_ADDRESS_LIST";
export const GET_ADDRESS_LIST_SUCCESS = "GET_ADDRESS_LIST_SUCCESS";
export const GET_ADDRESS_LIST_FAILURE = "GET_ADDRESS_LIST_FAILURE";

export const getAddressList = () => ({
    type: GET_ADDRESS_LIST
})

export const getAddressListSuccess = (list) => ({
    type: GET_ADDRESS_LIST_SUCCESS,
    payload: list
})

export const getAddressListFailure = (error) => ({
    type: GET_ADDRESS_LIST_FAILURE,
    payload: error
})