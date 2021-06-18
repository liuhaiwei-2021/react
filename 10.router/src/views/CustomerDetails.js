/** @format */

import React from "react";
import { useParams } from "react-router-dom";

const CustomerDetails = () => {
  const id = useParams();
    return <div>
      CustomerDetails {id}
  </div>;
};

export default CustomerDetails;
