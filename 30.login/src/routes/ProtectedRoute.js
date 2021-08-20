/** @format */

import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, userToken, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (userToken) {
          return <Component {...props} />;
        }
        return (
          <Redirect to={{pathname:'/', state:{from:props.location}}} />
        );
      }}
    />
  );
};

export default ProtectedRoute;
