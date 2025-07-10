import React from "react";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useAuth();
  const location = useLocation();
  console.log(location.pathname);
  if (loader) {
    return <Loader></Loader>;
  }
  if (!user) {
    return (
      <Navigate to={"/auth/login"} state={location.pathname}></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
