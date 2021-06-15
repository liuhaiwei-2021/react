/** @format */

import React from "react";

function TodoTitle({ todo ,toggleCompletedCallback}) {
    const toggle = () => {
        toggleCompletedCallback(todo.id)
    }

  return (
    <div>
      <h2 className={`todo-title ${todo.completed ? "completed" : ""}`} onClick={toggle}>
        {" "}
        {todo.title}
      </h2>
    </div>
  );
}

export default TodoTitle;
