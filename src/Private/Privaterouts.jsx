import React, {  useContext } from "react";


import Loading from "../Components/Loading";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";



const PrivateRouts = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <Loading />;

  if (user?.email) return children;

  
  return <Navigate to="/auth" replace state={{ from: location }} />;
};

export default PrivateRouts;