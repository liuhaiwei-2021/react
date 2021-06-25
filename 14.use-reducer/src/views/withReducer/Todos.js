/** @format */

import React, { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const reducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [
          { id: uuidv4(), text: action.payload, created: new Date() },
          ...state.todos,
        ],
      };
    case "remove-todo":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

function Todos() {
  const [{ todos }, dispatch] = useReducer(reducer, {
    todos: [],
  });
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    dispatch({ type: "add-todo", payload: input });
    setInput("");
  };
  return (
    <div className='container'>
      {/* Add todos form */}
      <div className='d-flex justify-content-center'>
        <div className='card shadow bg-light w-50'>
          <div className='card-body'>
            <form onSubmit={addTodo}>
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                className='form-control'
                placeholder='Enter your todo text...'></input>
            </form>
          </div>
        </div>
      </div>

      {/* Todos counter */}
      <div className='d-flex justify-content-center mt-2'>
        <small className='text-muted'>
          {todos.length > 0
            ? `You currently have ${todos.length} todos!`
            : "You currently have 0 todos!"}
        </small>
      </div>

      {/* Todos list */}
      <div className='d-flex justify-content-center mt-5 '>
        <ul className='list-group w-75'>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className='list-group-item d-flex justify-content-between align-items-center'>
              {todo.text}
              <div>
                <span className='badge bg-secondary rounded-pill'>
                  1 minutes ago{" "}
                </span>
                <i
                  onClick={() =>
                    dispatch({ type: "remove-todo", payload: todo.id })
                  }
                  className='fas fa-trash ms-4 remove'></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todos;
