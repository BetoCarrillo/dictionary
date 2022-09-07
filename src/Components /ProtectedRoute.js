import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/authcontext'

function ProtectedRoute({ children }) {
    const { user } = useContext(AuthContext)
    const isLogged = user !== null ? true : false;

  return (
      <>
          {isLogged ? children : <Navigate to = "/"/>              
          }
    </>
  )
}

export default ProtectedRoute