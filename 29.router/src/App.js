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
import CustomerEdit from "./view/CustomerEdit";

function App() {
  const [customers, setCustomers] = useState([
    { id: 1, name: "ABB sevrige" },
    { id: 2, name: "LEXION AB" },
    { id: 3, name: "OTTIS HISS" },
  ]);

  const [customer, setCustomer] = useState({});

  const setCustomerCallback = (id) => {
    const _customer = customers.find((x) => x.id == id);
    setCustomer(_customer);
  };
  return (
    <Router>
      <Navbar />
      <Switch>
        <ProtectedRoute path='/customers' exact>
          <Customers customers={customers} />
        </ProtectedRoute>
        <ProtectedRoute path='/customers/customer/:id' exact>
          <CustomerDetails
            customers={customers}
            customer={customer}
            setCustomerCallback={setCustomerCallback}
          />
        </ProtectedRoute>
        <ProtectedRoute path='/customers/customer/edit/:id' exact>
          <CustomerEdit
            customer={customer}
            setCustomerCallback={setCustomerCallback}
          />
        </ProtectedRoute>
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
