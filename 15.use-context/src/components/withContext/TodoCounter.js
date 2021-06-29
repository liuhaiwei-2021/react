/** @format */

import React, { useContext } from "react";
import { TodoContext } from "../../contexts/Context";

const TodoCounter = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div className='d-flex justify-content-center mt-2'>
      <small className='text-muted'>
        {
          todos.length > 0
          ? `You currently have ${todos.length} todos!`
          : "You currently have 0 todos!"}
      </small>
    </div>
  );
};

export default TodoCounter;
