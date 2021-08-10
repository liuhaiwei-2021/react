/** @format */

import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  changeTodoCallback,
  toggleTodoCompleted,
  removeTodoCallback,
}) => {
  return (
    <div className='todo-list'>
      <div className='container'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            changeTodoCallback={changeTodoCallback}
            toggleTodoCompleted={toggleTodoCompleted}
            removeTodoCallback={removeTodoCallback}
          />
        ))}
        {!todos.length && <h2 className='todo-item'>No todo left</h2>}
      </div>
    </div>
  );
};

export default TodoList;
