import {takeEvery, call, put} from "redux-saga/effects"
import {POST_CARD_DATA_ACTION, postCardDataAction} from "../actions";
import {postCard} from "../api";

export function* post(action) {
    const {cardNumber, cardDate, cvc} = action.payload;
    const success = yield call(postCard, cardNumber, cardDate, cvc)
    if(success) {
        yield put(postCardDataAction())
    }
}

export function* postCardSaga() {
    yield takeEvery(POST_CARD_DATA_ACTION, post)
}