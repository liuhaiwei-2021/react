/** @format */

import React from "react";

function TodoTitle({ todo }) {
  return (
    <div>
      <h2 className={`todo-title ${todo.completed ? "completed" : ""}`}>
        {" "}
        {todo.title}
      </h2>
    </div>
  );
}

export default TodoTitle;
