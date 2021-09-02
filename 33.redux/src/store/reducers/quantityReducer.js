import actiontypes from "../actiontypes";

const initialState = 2;

const quantityReducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes().quantity.increment:
          return state + action.payload;
    case actiontypes().quantity.decrement:
      return state - action.payload;
    default:
      return state;
  }
};
export default quantityReducer;

