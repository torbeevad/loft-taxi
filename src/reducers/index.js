import {combineReducers} from "redux";
import auth from "./auth"
import registration from "./registration"
import address from "./address"
import postCardData from "./postcarddata";

export default combineReducers({auth, registration, address, postCardData})
