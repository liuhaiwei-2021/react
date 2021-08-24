
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/todos" component={ Todos}/>

          
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
