/** @format */

import React, { useState, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [
          {
            id: uuidv4(),
            text: action.payload,
            created: new Date(),
          },
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

const Todos = () => {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
  const [input, setInput] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      dispatch({ type: "add-todo", payload: input });
      setInput("");
      console.log(todos);
    } else {
        alert('You need write a todo')
    }
  };

  // caculate the time
  const timeAgo = (date) => {
    let seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 3153600;
    if (interval > 1) return `${Math.floor(interval)} years`;
    interval = seconds / 2592000;
    if (interval > 1) return `${Math.floor(interval)} months`;
    interval = seconds / 86400;
    if (interval > 1) return `${Math.floor(interval)} dags`;
    interval = seconds / 3600;
    if (interval > 1) return `${Math.floor(interval)} hours`;
    interval = seconds / 60;
    if (interval > 1) return `${Math.floor(interval)} minutes`;
    return `${Math.floor(seconds)} seconds`;
  };

  return (
    <div className='container mt-5'>
      {/* add form */}
      <div className='d-flex justify-content-center align-items-center'>
        <div className='card bg-light w-50'>
          <div className='card-body'>
            <form onSubmit={addTodo}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type='text'
                className='form-control'
                placeholder='Enter your Todo....'
              />
            </form>
          </div>
        </div>
      </div>

      {/* todo counter */}
      <div className='d-flex justify-content-center mt-2  text-muted'>
        {todos.length > 0
          ? `You currently have ${todos.length} todos!`
          : "You currently have 0 todo!"}
      </div>

      {/* todo list */}
      <div className='d-flex justify-content-center align-items-center mt-5'>
        <ul className='list-grou(p w-75'>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className='list-group-item d-flex justify-content-between align-items-center'>
              {todo.text}
              <div className='d-flex justify-content-center'>
                <span className='badge bg-primary rounded-pill'>
                  {timeAgo(todo.created)}
                </span>
                <i
                  onClick={() =>
                    dispatch({ type: "remove-todo", payload: todo.id })
                  }
                  className='ms-4 fas fa-trash'></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
