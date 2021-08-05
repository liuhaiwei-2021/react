/** @format */

import "./App.css";
import { useState } from "react";
import AddCustomerForm from "./components/AddCustomerForm";
import CustomerList from "./components/CustomerList";
import Navbar from "./components/Navbar";

function App() {
  const [customers, setCustomers] = useState([{ id: "0", name: "customer 1" }]);

  const addCustomerCallback = (customerName) => {
    setCustomers((customers) => {
      return [
        ...customers,
        {
          id: Date.now().toString(),
          name: customerName,
        },
      ];
    });
  };

  const removeCustomerCallback = (id) => {
    setCustomers(customers => customers.filter(customer => customer.id !== id))
  };

  return (
    <div className='App'>
      <Navbar />
      <AddCustomerForm addCustomerCallback={addCustomerCallback} />
      <CustomerList
        customers={customers}
        removeCustomerCallback={removeCustomerCallback}
      />
    </div>
  );
}

export default App;
