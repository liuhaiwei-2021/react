/** @format */

import React from "react";
import { useState, useRef } from "react";
import Model from "./Model";

const AddItemForm = ({ addShoppingItemCallback }) => {
  const [title, setTitle] = useState("");
  const [model, setModel] = useState(false);
  // const [error, setError] = useState(false)
  const inputRef = useRef();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      addShoppingItemCallback(title);
      setTitle(""); //clear title input
      inputRef.current.focus(); //ref 这一种访问 DOM 的主要方式
    } else {
      // setError("You need add your shopping item");
      setModel(true);
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
        {/* <small>{error}</small> */}
        {model && (
          <Model text='You need add something to buy' visiable={setModel} />
        )}
      </form>
    </div>
  );
};

export default AddItemForm;
