/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const CustomerDetails = () => {
  const id = useParams();
  return (
    <div>
      <NavBar />
      CustomerDetails {id}
    </div>
  );
};

export default CustomerDetails;
