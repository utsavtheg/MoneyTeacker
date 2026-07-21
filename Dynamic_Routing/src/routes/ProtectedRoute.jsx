import React from 'react'

const ProtectedRoute = ({children}) => {

  let isAdmin = true;

  if(!isAdmin){
   return <Navigate to={"/"} />;

  }
  return children;
}

export default ProtectedRoute