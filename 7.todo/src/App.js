/** @format */

import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import Header from "./components/Header";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";

function App() {
  const [todos, settodos] = useState([
    {
      id: uuidv4(),
      title: "take out the trash",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "clean the office",
      completed: true,
    },
    {
      id: uuidv4(),
      title: "dinner with Molly",
      completed: false,
    },
  ]);

  const addTodoCallback = (todoTitle) => {
    settodos((prevTodos) => {
      return [
        { id: uuidv4(), title: todoTitle, completed: false },
        ...prevTodos,
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
