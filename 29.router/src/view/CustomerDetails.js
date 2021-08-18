/** @format */

import React from "react";
import { useParams } from 'react-router-dom'

const CustomerDetails = () => {
    const {id} = useParams()
  return <div>customers details: {id}</div>;
};

export default CustomerDetails;
