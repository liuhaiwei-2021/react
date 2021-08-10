/** @format */

import { useState, useEffect } from "react";

const ChangeTodo = ({ todo, changeTodo }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(todo.title);
  }, [todo.title]);

  const handleSubmit = (e) => {
    e.preventDefault();
    changeTodo(text);
  };

  return (
    <form className='change-todo'>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>OK</button>
    </form>
  );
};

export default ChangeTodo;
