import {takeEvery, call, put} from  "redux-saga/effects"
import {serverGetAddressList} from "../api";
import {GET_ADDRESS_LIST, getAddressListFailure, getAddressListSuccess} from "../actions";

export function* addressSaga() {
    const data = yield call(serverGetAddressList)
    if (data.addresses) {
        yield put(getAddressListSuccess(data.addresses))
    } else {
        yield put(getAddressListFailure("ошибка"))
    }
}

export function* addressListSaga() {
    yield takeEvery(GET_ADDRESS_LIST, addressSaga)
}