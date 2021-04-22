import {takeEvery, call, put} from "redux-saga/effects"
import {serverGetAddressList} from "../api";
import {GET_ADDRESS_LIST, getAddressListFailure, getAddressListSuccess} from "../actions";

export function* addressSaga() {
    try {
        const data = yield call(serverGetAddressList)
        if (data.addresses) {
            yield put(getAddressListSuccess(data.addresses))
        }
    } catch {
        yield put(getAddressListFailure("ошибка"))
    }
}

export function* addressListSaga() {
    yield takeEvery(GET_ADDRESS_LIST, addressSaga)
}