/** @format */

import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <div className='todo-item'>
      <h2 className={todo.completed ? 'completed' : ''}>{todo.title}</h2>
      <div className='buttons'>
        <button className='btn change-btn'>change</button>
        <button className='btn delete-btn'>delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
