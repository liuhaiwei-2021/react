/** @format */

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import NotFound from "./views/NotFound";
import Overview from "./views/Overviews";
import Cases from "./views/Cases";
import CaseDetails from "./views/CaseDetails";
import CustomerDetails from "./views/CustomerDetails";
import CustomerEdit from "./views/CustomerEdit";
import Customers from "./views/Customers";
import SignIn from "./views/SignIn";
import { useState } from "react";

function App() {
  const [customers, setCustomers] = useState([
    { id: 1, name: "ABB Sevrige" },
    { id: 2, name: "OTIS Hiss" },
    { id: 3, name: "Lexcion" },
  ]);
  const [customer, setCustomer] = useState({});
  const setCustomerCallback = (id) => {
    const _customer = customers.find((x) => x.id == id);
    setCustomer(_customer);
  };
  return (
    <Router>
      <Switch>
        <ProtectedRoute path='/' exact component={Overview} />
        <ProtectedRoute path='/cases' exact component={Cases} />
        <ProtectedRoute path='/customers' exact>
          <Customers customers={customers} />
        </ProtectedRoute>
        <ProtectedRoute path='/cases/case/:id' exact component={CaseDetails} />
        <ProtectedRoute path='/customers/customer/:id' exact>
          <CustomerDetails customer={customer} callback={setCustomerCallback} />
        </ProtectedRoute>
        <ProtectedRoute path='/customers/customer/edit/:id' exact>
          <CustomerEdit customer={customer} callback={setCustomerCallback} />
        </ProtectedRoute>

        <Route path='/signin' exact component={SignIn} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
