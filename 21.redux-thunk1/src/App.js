/** @format */

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navgation/Navbar";
import News from "./views/News";
import Login from "./views/Login";
import Create from "./views/Create";
import PostDetails from "./views/PostDetails";
import {ProtectedRoute} from "./routers/ProtectedRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route path='/' exact component={News} />
          <Route path='/login' exact component={Login} />
          <Route path='/posts/:id' exact component={PostDetails} />
          <ProtectedRoute path='/create' exact component={Create} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
