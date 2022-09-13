import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/authcontext'
import '../styles/login.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const Login = () => {
  const { user, setUser, userLogIn, userLogOut, resetPass } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirectLogin = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleUserLogIn = ()=>{
    userLogIn(email, password);
    if (!userLogIn) {
        (redirectLogin("/", { replace: true}));
    } else {
       redirectLogin("loginfailed");
      
    }
  }
 
  const handleUserLogOut = ()=>{
    userLogOut();    
  }

/*   const handleResetPass = () => {
    resetPass();
   } */

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
      <input id='email' className="logInput" type="text" name="mail"  placeholder='Email address ' value={email} onChange={handleEmailChange}></input>
        </OverlayTrigger> : ""}

         {   !user ?  <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={secondRenderTooltip}
    >
      <input id='password' className="logInput" type="text" name="mail"  placeholder='Password ' value={password} onChange={handlePasswordChange}></input>
        </OverlayTrigger> : ""}
     {/*    <p onClick={handleResetPass}>Forgot your password?</p> */}
         {user ? (<button className='logBut' type="button" onClick={handleUserLogOut}><span className="material-symbols-outlined logOutIcon">
logout&nbsp;
</span>
Logout</button>) :
          (<button className='logBut move' type="button" onClick={handleUserLogIn}><span className="material-symbols-outlined logInIcon "> 
login
            &nbsp;</span>Login</button>)}
        
      </div>
  
      { !user ? <Link to="/register" className='regLink move'>Not a member yet? Click to register </Link> : ""}
     
    </div> 

  )
}

export default Login