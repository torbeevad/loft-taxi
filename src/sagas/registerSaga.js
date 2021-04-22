import {takeEvery, call, put} from "redux-saga/effects"
import {REGISTRATION, registration} from "../actions";
import {serverReg} from "../api";

export function* registrationSaga(action) {
    const {email, name, password, surname} = action.payload;
    const success = yield call(serverReg, email, name, password, surname)
    if(success) {
        yield put(registration())
    }
}

export function* regSaga() {
    yield takeEvery(REGISTRATION, registrationSaga)
}