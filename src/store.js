import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers";
import createSagaMiddleWare from "redux-saga"
import {authSaga} from "./authSaga"
import {composeWithDevTools} from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleWare()

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(authSaga)
