/** @format */

import React from "react";

const TodoTitle = ({ todo, toggleTodoCompleted }) => {
  const toggle = () => {
    toggleTodoCompleted(todo.id);
  };
  return (
    <div className='todo-title'>
      <h2 onClick={toggle} className={todo.completed ? "completed" : ""}>
        {todo.title}
      </h2>
    </div>
  );
};

export default TodoTitle;
