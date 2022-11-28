import { combineReducers } from "redux";
import fakeStore from "./fakeStoreReducer";


export default combineReducers({
    getRequest:fakeStore,
})