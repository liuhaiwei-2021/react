/** @format */

import { useState } from "react";
import "./App.css";
import CaseCreatForm from "./components/CaseCreatForm";
import CaseListTable from "./components/CaseListTable";
import Navbar from "./components/Navbar";

function App() {
  const [categories, setCategories] = useState([
    { value: 1, name: "Problem" },
    { value: 2, name: "Question" },
    { value: 3, name: "Request" },
  ]);
  const [customers, setCustomers] = useState([
    { value: 1, name: "ABB" },
    { value: 2, name: "Lexion" },
    { value: 3, name: "OTIS" },
  ]);

  const [cases, setCases] = useState([]);
  const addCaseCallback = (_case) => {
    setCases((cases) => {
      return [_case, ...cases];
    });
  };
  return (
    <div className='App'>
      <Navbar />
      <div className='container mt-4 grid'>
        <CaseCreatForm
          categories={categories}
          customers={customers}
          addCaseCallback={addCaseCallback}
        />
        <CaseListTable cases={cases} customers={customers}/>
      </div>
    </div>
  );
}

export default App;
