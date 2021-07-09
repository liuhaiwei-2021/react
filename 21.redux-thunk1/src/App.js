/** @format */

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navgation/Navbar";
import News from "./views/News";
import Login from "./views/Login";
import Creat from "./views/Creat";
import PostDetails from './views/PostDetails'

function App() {
  return (
    <Router>
       <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={ News}/>
          <Route path="/login" exact component={ Login}/>
          <Route path="/creat" exact component={ Creat}/>
          <Route path="/posts/:id" exact component={ PostDetails}/>
        </Switch>
       
      </div>
    </Router>
  );
}

export default App;
