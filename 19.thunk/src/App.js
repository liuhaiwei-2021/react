/** @format */

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navgation/Navbar";
import { Provider } from "react-redux";
import store from "./store";
import News from "./views/News";
import Login from "./views/Login";
import PostDetails from "./views/PostDetails";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={News} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/posts/:id' component={PostDetails} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
