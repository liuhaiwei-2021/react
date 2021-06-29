/** @format */

import "./App.css";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WithProps from "./views/WithProps";
import WithContext from "./views/WithContext";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "./contexts/Context";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoCallback = (text) => {
    setTodos((todos) => {
      return [{ id: uuidv4(), text: text, created: new Date() }, ...todos];
    });
  };

  const removeTodoCallback = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  const timeAgo = (date) => {
    let seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 3153600;
    if (interval > 1) return `${Math.floor(interval)} years`;
    interval = seconds / 2592000;
    if (interval > 1) return `${Math.floor(interval)} months`;
    interval = seconds / 86400;
    if (interval > 1) return `${Math.floor(interval)} dags`;
    interval = seconds / 3600;
    if (interval > 1) return `${Math.floor(interval)} hours`;
    interval = seconds / 60;
    if (interval > 1) return `${Math.floor(interval)} minutes`;
    return `${Math.floor(seconds)} seconds`;
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <WithProps
            todos={todos}
            addTodoCallback={addTodoCallback}
            removeTodoCallback={removeTodoCallback}
            timeAgo={timeAgo}
          />
        </Route>
        <TodoContext.Provider
          value={{todos, addTodoCallback, removeTodoCallback, timeAgo}}>
          <Route path='/context' exact component={WithContext} />
        </TodoContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
