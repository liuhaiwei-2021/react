/** @format */

import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, changeTodoCallback }) {
  return (
    <div className='todo-list'>
      <div className='container'>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            changeTodoCallback={changeTodoCallback}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
