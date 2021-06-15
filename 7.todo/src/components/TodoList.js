/** @format */

import React from "react";
import TodoItem from "./TodoItem";


function TodoList({
  todos,
  changeTodoCallback,
  toggleCompletedCallback,
  removeTodoCallback,
}) {
  return (
    <div className='todo-list'>
      <div className='container'>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            changeTodoCallback={changeTodoCallback}
            toggleCompletedCallback={toggleCompletedCallback}
            removeTodoCallback={removeTodoCallback}
          />
        ))}
        {!todos.length && (
          <h2 className='todo-item text-center'>No todo left!</h2>
        )}
      </div>
    </div>
  );
}

export default TodoList;
