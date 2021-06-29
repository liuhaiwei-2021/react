/** @format */

import React,{useContext} from "react";
import { TodoContext } from "../../contexts/Context";

const TodoItem = ({todo}) => {
  const {removeTodoCallback,timeAgo}=useContext(TodoContext)
  const removeTodo = () => {
    removeTodoCallback(todo.id);
  };
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {todo.text}
      <div>
        <span className='badge bg-secondary rounded-pill'>
          {timeAgo(todo.created)}
        </span>
        <i onClick={removeTodo} className='fas fa-trash ms-4 remove'></i>
      </div>
    </li>
  );
};

export default TodoItem;
