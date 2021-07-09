/** @format */

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postsReducer from "./postsReducer";
import postReducer from "./postReducer";

export default combineReducers({
  auth: authReducer,
  posts: postsReducer,
  post: postReducer,
});
