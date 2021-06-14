/** @format */

import React from "react";
import { useRef, useState } from "react";

const AddTodoForm = ({ addTodoCallback }) => {
  const inputRef = useRef();
  const [title, setTitle] = useState("");
  const [error, setError] = useState(undefined);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      addTodoCallback(title);
      setTitle("");
      inputRef.current.focus();
    } else {
      setError("You need add something todo.");
    }
  };

  return (
    <div className='add-todo'>
      <form className='container' onSubmit={handleSubmit}>
        <div className='flex'>
          <input
            type='text'
            placeholder='Please add your title'
            ref={inputRef}
            value={title}
            onChange={(e) => setTitle(e.target.value)}></input>
          <input type='submit' value='ADD'></input>
        </div>
        <small>{error}</small>
      </form>
    </div>
  );
};

export default AddTodoForm;
