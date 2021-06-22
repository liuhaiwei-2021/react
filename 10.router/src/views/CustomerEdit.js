/** @format */
import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect } from "react";

const CustomerEdit = ({customer, callback}) => {
    const { id } = useParams();

    useEffect(() => {
      callback(id);
    });
  return (
    <>
      <NavBar />
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <h1>{customer.name}</h1>
            <small>Kundernr. {customer.id}</small>
          </div>
          </div>
        </div>
    </>
  );
};

export default CustomerEdit;
