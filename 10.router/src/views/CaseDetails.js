/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const CaseDetails = () => {
  const { id } = useParams();
  return (
    <>
      <NavBar />
      <div className='container'>cases{id}</div>
    </>
  );
};

export default CaseDetails;
