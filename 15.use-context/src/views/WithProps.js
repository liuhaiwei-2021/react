/** @format */

import React from "react";
import AddTodo from "../components/withProps/AddTodo";
import TodoCounter from "../components/withProps/TodoCounter";
import TodoList from "../components/withProps/TodoList";

function withProps({ todos, addTodoCallback, removeTodoCallback, timeAgo }) {
  return (
    <div className='container'>
      <AddTodo addTodoCallback={addTodoCallback} />
      <TodoCounter counter={todos.length} />
      <TodoList
        todos={todos}
        removeTodoCallback={removeTodoCallback}
        timeAgo={timeAgo}
      />
    </div>
  );
}

export default withProps;
