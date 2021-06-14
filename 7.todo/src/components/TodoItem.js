/** @format */

import React from "react";

function TodoItem({ todo }) {
  return (
    <div className='todo-item'>
      <h2 className={todo.completed ? "completed" : ""}> {todo.title}</h2>
      <div>
        <button className='change-btn btn'>Change</button>
        <button className='delete-btn btn'>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
