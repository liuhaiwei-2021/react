/** @format */

import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../services/AuthService";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
      <Route {...rest} render={props => {
          if (auth.isAuthenticated())
              return <Component {...props} />;
          else
          return (<Redirect to={{ pathname: "/signin", state: { from: props.location } }}/> )
      }}
    />
  );
};

export default ProtectedRoute;
