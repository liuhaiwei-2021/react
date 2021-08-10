/** @format */

import { useState, useRef } from "react";
import Modal from "./Modal";

const AddTodoForm = ({ addTodoCallback }) => {
  const [todoTitle, setTodoTitle] = useState("");
  // const [error, setError] = useState(undefined);
  const [modal, setModal] = useState(false);

  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoTitle.trim() !== "") {
      addTodoCallback(todoTitle);
      setTodoTitle("");
      inputRef.current.focus();
    } else {
      // setError("You need to enter something to do");
      setModal(true);
    }
  };

  return (
    <div className='add-todo '>
      <form className='container' onSubmit={handleSubmit}>
        <div className='flex'>
          <input
            type='text'
            ref={inputRef}
            placeholder='Add todo...'
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
          <input type='submit' value='ADD' />
        </div>
        {modal && (
          <Modal
            text={"You need to enter something todo"}
            visiable={setModal}
          />
        )}
        {/* <small>{error}</small> */}
      </form>
    </div>
  );
};

export default AddTodoForm;
