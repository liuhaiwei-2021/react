/** @format */

import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Overview from "./view/Overview";
import NotFound from "./components/NotFound";
import CaseDetails from "./view/CaseDetails";
import Cases from "./view/Cases";
import Customers from "./view/Customers";
import CustomerDetails from "./view/CustomerDetails";
import Navbar from "./components/Navbar";
import SignIn from "./view/SignIn";
import ProtectedRoute from "./components/routes/ProtectedRoute";

function App() {
  const [customers, setCustomers] = useState([
    { id: 1, name: "ABB" },
    { id: 2, name: "LEXION" },
    { id: 3, name: "OTTIS" },
  ]);
  return (
    <Router>
      <Navbar />
      <Switch>
        
        <ProtectedRoute path='/customers' exact>
          <Customers customers={customers}/>
        </ProtectedRoute>
        <ProtectedRoute path='/customers/customer/:id' exact component={CustomerDetails}/>
        <ProtectedRoute path='/cases' exact component={Cases} />
        <ProtectedRoute path='/cases/case/:id' exact component={CaseDetails} />
        <ProtectedRoute path='/' exact component={Overview} />

        
        <Route path='/signin' exact component={SignIn} />
        <Route path='*' exact component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
