/** @format */

import React from "react";
import { useRef, useState } from "react";
import Model from "./Model";

const AddTodoForm = ({ addTodoCallback }) => {
  const inputRef = useRef();
  const [title, setTitle] = useState("");
  // const [error, setError] = useState(undefined);
  const [showModel, setShowModel] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      addTodoCallback(title);
      setTitle("");
      inputRef.current.focus();
    } else {
      setShowModel(true);
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
        {/* <small>{error}</small> */}
        {showModel && (
          <Model text='you must add something' visible={setShowModel} />
        )}
      </form>
    </div>
  );
};

export default AddTodoForm;
