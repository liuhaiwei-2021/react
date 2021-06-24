/** @format */

import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CounterUseState from "./views/withState/Counter";
import CounterUseReducer from "./views/withReducer/Counter";
import Todos from "./views/withReducer/Todos";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={CounterUseState} />
        <Route path='/usereducer' exact component={CounterUseReducer} />
        <Route path='/todos' exact component={Todos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
