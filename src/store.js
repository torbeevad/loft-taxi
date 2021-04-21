import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers";
import createSagaMiddleWare from "redux-saga"
import {authSaga} from "./sagas/authSaga"
import {regSaga} from "./sagas/registerSaga"
import {postCardSaga} from "./sagas/postCardSaga";
import {composeWithDevTools} from "redux-devtools-extension";
import {addressListSaga} from "./sagas/addressListSaga";

const sagaMiddleware = createSagaMiddleWare()

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(authSaga)
sagaMiddleware.run(regSaga)
sagaMiddleware.run(postCardSaga)
sagaMiddleware.run(addressListSaga)
