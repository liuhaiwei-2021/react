/** @format */

import { useState, useRef } from "react";

const AddTodoForm = ({ addTodoCallback }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [error, setError] = useState(undefined);
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoTitle.trim() !== "") {
      addTodoCallback(todoTitle);
      setTodoTitle("");
      inputRef.current.focus();
    } else {
      setError("You need to enter something to do");
    }
  };

  return (
    <div className='add-todo '>
      <form className='container' onSubmit={handleSubmit}>
        <div className="flex">
        <input
          type='text'
          ref={inputRef}
          placeholder='Add todo...'
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <input type='submit' value='ADD' />

        </div>
        
        <small>{error}</small>
      </form>
    </div>
  );
};

export default AddTodoForm;
