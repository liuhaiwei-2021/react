/** @format */

import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import Header from "./components/Header";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
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
    setTodos((prevTodos) => {
      return [
        { id: uuidv4(), title: todoTitle, completed: false },
        ...prevTodos,
      ];
    });
  };
  const changeTodoCallback = (id, newTitle) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          todo.title = newTitle;
        }
        return todo;
      });
    });
  };
  return (
    <div className='App'>
      <Header title='Todos' />
      <AddTodoForm addTodoCallback={addTodoCallback} />
      <TodoList todos={todos} changeTodoCallback={changeTodoCallback} />
    </div>
  );
}

export default App;
