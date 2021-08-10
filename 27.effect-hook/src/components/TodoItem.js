/** @format */

import { useState } from "react";
import ChangeTodo from "./ChangeTodo";
import TodoTitle from "./TodoTitle";
import Modal from "./Modal";

const TodoItem = ({
  todo,
  changeTodoCallback,
  toggleTodoCompleted,
  removeTodoCallback,
}) => {
  const [change, setChange] = useState(false);
  const toggleChange = () => {
    setChange((prev) => !prev);
  };
  const changeTodo = (text) => {
    changeTodoCallback(todo.id, text);
    setChange(false);
  };

  const deleteTodo = () => {
    if (todo.completed)
      removeTodoCallback(todo.id);
    setShowModal(true)
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='todo-item'>
        {change ? (
          <ChangeTodo todo={todo} changeTodo={changeTodo} />
        ) : (
          <TodoTitle todo={todo} toggleTodoCompleted={toggleTodoCompleted} />
        )}

        <div className='buttons'>
          <button className='btn change-btn' onClick={toggleChange}>
            change
          </button>
          <button className='btn delete-btn' onClick={deleteTodo}>
            delete
          </button>
        </div>
      </div>
      {showModal && (
        <Modal
          text={"You must complete the todo first"}
          visiable={setShowModal}
        />
      )}
    </>
  );
};

export default TodoItem;
