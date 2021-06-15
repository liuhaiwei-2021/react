/** @format */

import React from "react";
import { useState, useEffect } from "react";

function ChangeTodo({ todo,changeTodo }) {
  const [text, setText] = useState("");

    //useEffect after every render
  useEffect(() => {
    setText(todo.title);
  }, [todo.title]);
    
    const handleSubmit = e => {
        e.preventDefault()
        changeTodo(text)
    }

  return (
    <form className='change-todo' onSubmit={handleSubmit}>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}></input>
      <button>OK</button>
    </form>
  );
}

export default ChangeTodo;
