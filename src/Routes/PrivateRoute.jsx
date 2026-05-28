import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // Check if user is authenticated by looking for auth token in localStorage
  const authToken = localStorage.getItem("authToken");
  const isAuthenticated = !!authToken;

  // If user is authenticated, render the component; otherwise redirect to login
  return !isAuthenticated ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
