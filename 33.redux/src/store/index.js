/** @format */

import { createStore } from "redux";
// import counterReducer from "./reducers/counterReducer";
// import quantityReducer from "./reducers/quantityReducer";
import rootReducer from "./reducers";

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
