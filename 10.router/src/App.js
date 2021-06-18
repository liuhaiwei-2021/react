/** @format */

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFound from "./views/NotFound";
import Overview from "./views/Overviews";
import Cases from "./views/Cases";
import CaseDetails from "./views/CaseDetails";
import CustomerDetails from "./views/CustomerDetails";
import Customers from "./views/Customers";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Overview} />
        <Route path='/cases' exact component={Cases} />
        <Route path='/customers' exact component={Customers} />
        <Route path='/case/:id' exact component={CaseDetails} />
        <Route path='/customer/:id' exact component={CustomerDetails} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
