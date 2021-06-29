/** @format */

import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodoCallback, timeAgo }) => {
  return (
    <div className='d-flex justify-content-center mt-5 '>
      <ul className='list-group w-75'>
        {
          todos.map(todo => (
          <TodoItem key={todo.id} todo={todo}  removeTodoCallback={removeTodoCallback}  timeAgo={timeAgo} />
          ))
        }
      </ul>
    </div>
  );
};

export default TodoList;
