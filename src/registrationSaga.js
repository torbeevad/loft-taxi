import {call, put, takeEvery} from "redux-saga/effects";
import {REGISTRATION} from "./actions";
import {registration} from "./api";

export function* registrationSaga(action) {
    const {email, password, name} = action.payload;
    const success = yield call(email, password, name)
    if (success) {
        yield
    }
}

export function* registration() {
    yield takeEvery(REGISTRATION, registrationSaga)
}