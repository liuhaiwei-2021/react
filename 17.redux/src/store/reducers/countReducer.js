/** @format */

import actiontypes from "../actiontypes";

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes().counter.increment:
      return state + 1;
    case actiontypes().counter.decrement:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
