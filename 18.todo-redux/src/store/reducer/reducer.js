/** @format */
import actiontypes from "./actiontypes";

const initialState = {
  list: ["clean house", "buy some fruit", "watch TV"],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes().todos.addTodo:
      let newState = JSON.parse(JSON.stringify(state));
      newState.list.push(action.payload.todo);
      return newState;

    default:
      return state;
  }
};
export default reducer;
