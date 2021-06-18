/** @format */

import "./App.css";
import NavBar from "./components/NavBar";
import CaseCreateForm from "./components/CaseCreatForm/CaseCreateForm";
import CaseListTable from "./components/CaseListTable/CaseListTable";
import { useState } from "react";

function App() {
  const [categories, setCategories] = useState([
    { value: 1, name: "problem" },
    { value: 2, name: "question" },
    { value: 3, name: "request" },
  ]);
  const [customers, setCustomers] = useState([
    { id: 1, name: "ABB Seveige AB" },
    { id: 2, name: "OTTIS hiss AB" },
    { id: 3, name: "Lexcion" },
  ]);
  const [cases, setCases] = useState([]);
  const addCaseCallback = (_case) => {
    setCases((cases) => {
      return [_case, ...cases];
    });
  };

  return (
    <>
      <NavBar />
      <div className='container mt-4 grid '>
        <CaseCreateForm
          categories={categories}
          customers={customers}
          callback={addCaseCallback}
        />
        <CaseListTable cases={cases} customers={customers} />
      </div>
    </>
  );
}

export default App;
