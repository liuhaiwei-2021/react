
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './views/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact >
            <Login />

          </Route>
        </Switch>
      </Router>
 
    </div>
  );
}

export default App;