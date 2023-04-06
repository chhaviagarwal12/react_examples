import { combineReducers } from "redux";
import setColorReducer from "./setColorReducer";

export default combineReducers({
    setColor:setColorReducer
})