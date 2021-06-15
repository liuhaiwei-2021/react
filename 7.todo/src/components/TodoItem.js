/** @format */

import React from "react";
import { useState } from "react";
import TodoTitle from "./TodoTitle";
import ChangeTodo from "./ChangeTodo";

function TodoItem({ todo,changeTodoCallback }) {
  const [change, setChange] = useState(true);
  const toggleChange = () => {
    setChange((prev) => !prev);
  };
  const changeTodo = (text) => {
    changeTodoCallback(todo.id, text)
    setChange(false)
  }

  return (
    <div className='todo-item'>
      {change ? <ChangeTodo todo={todo} changeTodo ={changeTodo}/> : <TodoTitle todo={todo} />}

      <div>
        <button className='change-btn btn' onClick={toggleChange}>
          Change
        </button>
        <button className='delete-btn btn'>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
