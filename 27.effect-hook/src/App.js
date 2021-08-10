/** @format */

import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
import { useState,useEffect } from "react";

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

  const toggleTodoCompleted = (id) => {
    let newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const removeTodoCallback = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  useEffect(() => {// componentDidMount
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos)
      setTodos(storedTodos)    
  }, [])
  
  useEffect(() => { //wacher tittar på todos
    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos])
  // useEffect(() => {    componentDidUpdate

  // })

  // useEffect(() => {  
  //   return {

  //   }
  // })

  return (
    <div className='App'>
      <Header title='Todos' />
      <AddTodoForm addTodoCallback={addTodoCallback} />
      <TodoList
        todos={todos}
        changeTodoCallback={changeTodoCallback}
        toggleTodoCompleted={toggleTodoCompleted}
        removeTodoCallback={removeTodoCallback}
      />
    </div>
  );
}

export default App;
