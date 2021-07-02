/** @format */
import actiontypes from "./actiontypes";

const initialState = {
  list: ["clean house", "buy some fruit", "watch TV"],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes().todos.addTodo: {
      let newState = JSON.parse(JSON.stringify(state));
      newState.list.push(action.payload.todo);
      return newState;
    }

    case actiontypes().todos.deleteTodo: {
      let newState = JSON.parse(JSON.stringify(state));
      newState.list.splice(action.payload.index, 1);
      return newState;
    }

    default:
      return state;
  }
};
export default reducer;
