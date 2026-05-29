import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const authToken = localStorage.getItem("authToken");

  const isAuthenticated = !!authToken;

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
