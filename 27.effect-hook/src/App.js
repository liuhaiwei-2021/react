/** @format */

import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), title: "clean house", completed: false },
    { id: uuidv4(), title: "wash clothes", completed: true },
    { id: uuidv4(), title: "learn english", completed: false },
  ]);
  const addTodoCallback = (todoTitle) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: uuidv4(), title: todoTitle, completed: false },
      ];
    });
  };
  return (
    <div className='App'>
      <Header title='Todos' />
      <AddTodoForm addTodoCallback={addTodoCallback} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
