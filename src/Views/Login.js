import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/authcontext'
import '../styles/login.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { auth } from '../firebaseconfig';


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

  const handleUserLogIn = () => {
    userLogIn(email, password);
  /*   auth !==  null ? redirectLogin("/loginfailed", { replace: true }) : (redirectLogin("/", { replace: true })); */
  }
/*     if (userLogIn) {
      redirectLogin("/loginfailed", { replace: true });  
    }  else if(!userLogIn ) {
      (redirectLogin("/", { replace: true}));
    }
  } */
 
  const handleUserLogOut = ()=>{
    userLogOut();    
  }

/*   const handleResetPass = () => {
    resetPass();
   } */

   const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Valid email
    </Tooltip>
   );
  
   const secondRenderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      6 characters password
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
         {user ? (<button className='logBut' type="button" onClick={handleUserLogOut}>
          Logout &nbsp; &nbsp;<span className="material-symbols-outlined logOutIcon"> 
logout 
            </span></button>) :
          (<button className='logBut move' type="button" onClick={handleUserLogIn}>Login &nbsp; &nbsp;<span className="material-symbols-outlined logInIcon "> 
login 
            </span> </button>)}
        
      </div>
  
      { !user ? <Link to="/register" className='regLink move'>Not a member yet? Click to register </Link> : ""}
     
    </div> 

  )
}

export default Login