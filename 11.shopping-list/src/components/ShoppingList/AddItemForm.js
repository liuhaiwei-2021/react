/** @format */

import React from "react";
import { useState, useRef } from "react";

const AddItemForm = ({ addShoppingItemCallback }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      addShoppingItemCallback(title);
      setTitle(""); //cleae title input
      inputRef.current.focus(); //ref 这一种访问 DOM 的主要方式
    } else {
      setError("You need add your shopping item");
    }
  };
  return (
    <div className='container add-form my-3'>
      <form className='' onSubmit={handelSubmit}>
        <div className='d-flex w-100'>
          <input
            type='text'
            className='form-control '
            ref={inputRef}
            placeholder='add your shopping item...'
            value={title}
            onChange={(e) => setTitle(e.target.value)}></input>
          <input type='submit' className='form-control'></input>
        </div>
        <small>{error}</small>
      </form>
    </div>
  );
};

export default AddItemForm;
