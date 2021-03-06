/** @format */

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../store/reducers";
import thunk from "redux-thunk";

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
