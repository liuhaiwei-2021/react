/** @format */

import React from "react";
import { useState } from "react";
import TodoTitle from "./TodoTitle";
import ChangeTodo from "./ChangeTodo";
import Model from "./Model";

function TodoItem({
  todo,
  changeTodoCallback,
  toggleCompletedCallback,
  removeTodoCallback,
}) {
  const [change, setChange] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const toggleChange = () => {
    setChange((prev) => !prev);
  };
  const changeTodo = (text) => {
    changeTodoCallback(todo.id, text);
    setChange(false);
  };
  const deleteTodo = () => {
    if (todo.completed) {
      removeTodoCallback(todo.id);
    } else {
      setShowModel(true);
    }
  };

  return (
    <>
      <div className='todo-item'>
        {change ? (
          <ChangeTodo todo={todo} changeTodo={changeTodo} />
        ) : (
          <TodoTitle
            todo={todo}
            toggleCompletedCallback={toggleCompletedCallback}
          />
        )}

        <div>
          <button className='change-btn btn' onClick={toggleChange}>
            Change
          </button>
          <button className='delete-btn btn' onClick={deleteTodo}>
            Delete
          </button>
        </div>
      </div>
      {showModel && (
        <Model text='you must complete todo first!' visible={setShowModel} />
      )}
    </>
  );
}

export default TodoItem;
