import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/authcontext'
import '../styles/login.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Login() {
  const redirectLogin = useNavigate();
  const { user, setUser } = useContext(AuthContext)
  
  const changeClass = () => {
    
  }

  const userLogin = ()=>{
    setUser({ name: "beto" })
    changeClass()
    console.log(user)
      (redirectLogin("/", {replace: true} ))
    
  }
  const userLogout = ()=>{
    setUser(null)
    console.log(user)
    ( {replace: true} )
    
  }
   const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Email
    </Tooltip>
   );
  
   const secondRenderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Password
    </Tooltip>
  );

  return (
    <div className="login" >
      <div className={!user ? 'LogDiv' : 'logDiv2'}>
       { !user ? <p className='logTitle'> Login</p> : ""}
        {!user ? <p className='logText'>Login to access your personalized vocabulary</p> : ""}
      

   {   !user ?    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <input className="emailAddInput" type="input" name="mail"  placeholder='Email address '></input>
        </OverlayTrigger> : ""}

         {   !user ?  <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={secondRenderTooltip}
    >
      <input className="passInput" type="input" name="mail"  placeholder='Password '></input>
          </OverlayTrigger> : ""}
         {user ? (<button className='logBut' type="button" onClick={userLogout}><span class="material-symbols-outlined logOutIcon">
logout
</span>
Logout</button>) :
          (<button className='logBut' type="button" onClick={userLogin}><span class="material-symbols-outlined logInIcon"> 
login
</span>Login</button>)}
      </div>
      { !user ? <p className='regLink'>Not a member yet? Click to register </p> : ""}
     
    </div> 

  )
}

export default Login