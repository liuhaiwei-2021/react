/** @format */

import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Posts from "./views/Posts";
import Home from "./views/Home";

function App() {
  const [userToken, setUserToken] = useState(null);
  const setUser = (token) => {
    setUserToken(token);
  };

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/' exact>
            <Login setUser={setUser} userToken={userToken} />
          </Route>
          <ProtectedRoute
            exact
            path='/posts'
            userToken={userToken}
            component={Posts}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
