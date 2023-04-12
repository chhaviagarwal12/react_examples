import { combineReducers } from "redux";
import setColorReducer from "./setColorReducer";
import setTimerReducer from './setTimerReducer'

export default combineReducers({
    setColor:setColorReducer,
    setTimer:setTimerReducer
})