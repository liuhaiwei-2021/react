import { combineReducers } from "redux";
import authReducer from "./authReducers";
import postsReducer from "./postsReducer"

export default combineReducers({
    auth: authReducer,
    posts: postsReducer

})