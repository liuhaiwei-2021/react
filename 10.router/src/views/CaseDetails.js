/** @format */

import React from "react";
import { useParams } from "react-router-dom";

const CaseDetails = () => {
  const { id } = useParams();
    return <div>
      cases{id}
  </div>;
};

export default CaseDetails;
