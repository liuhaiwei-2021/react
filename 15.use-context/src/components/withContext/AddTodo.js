/** @format */

import React, { useState, useContext } from "react";
import { TodoContext } from "../../contexts/Context";

export const AddTodo = () => {
  const [input, setInput] = useState("");
  const {addTodoCallback} = useContext(TodoContext)
  const addTodo = (e) => {
    e.preventDefault();
    addTodoCallback(input);
    setInput("");
  };
  return (
    <div className='d-flex justify-content-center'>
      <div className='card shadow bg-light w-50'>
        <div className='card-body'>
          <form onSubmit={addTodo}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='form-control'
              placeholder='Enter your todo text...'></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
