/** @format */

import React from "react";

const TodoCounter = ({ counter }) => {
  return (
    <div className='d-flex justify-content-center mt-2'>
      <small className='text-muted'>
        {counter > 0
          ? `You currently have ${counter} todos!`
          : "You currently have 0 todos!"}
      </small>
    </div>
  );
};

export default TodoCounter;
