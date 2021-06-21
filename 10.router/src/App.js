/** @format */

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import NavBar from "./components/NavBar";
import NotFound from "./views/NotFound";
import Overview from "./views/Overviews";
import Cases from "./views/Cases";
import CaseDetails from "./views/CaseDetails";
import CustomerDetails from "./views/CustomerDetails";
import Customers from "./views/Customers";
import SignIn from "./views/SignIn";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <ProtectedRoute path='/' exact component={Overview} />
        <ProtectedRoute path='/cases' exact component={Cases} />
        <ProtectedRoute path='/customers' exact component={Customers} />
        <ProtectedRoute path='/cases/case/:id' exact component={CaseDetails} />
        <ProtectedRoute
          path='/customers/cudtomer/:id'
          exact
          component={CustomerDetails}
        />

        <Route path='/signin' exact component={SignIn} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
