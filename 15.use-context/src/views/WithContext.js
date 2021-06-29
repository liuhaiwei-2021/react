/** @format */

import React from "react";
import AddTodo from "../components/withContext/AddTodo";
import TodoCounter from "../components/withContext/TodoCounter";
import TodoList from "../components/withContext/TodoList";

function WithContext() {
 
  return (
    <div className='container'>
      <AddTodo />
      <TodoCounter />
      <TodoList />
    </div>
  );
}

export default WithContext;
