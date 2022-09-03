import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

  let redirectLogin = useNavigate();

  return (
    <div>Login</div> 
/* {redirectLogin ("/", replace: true) } INSIDE THE LOGIN FUNCTION*/
  )
}

export default Login