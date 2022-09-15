import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/authcontext";
import "../styles/login.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Login = () => {
  const { user, userLogIn, userLogOut } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirectLogin = useNavigate();
  const [passwordType, setPasswordType] = useState("password");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleUserLogIn = () => {
    userLogIn(email, password);
    redirectLogin("/", { replace: true });
  };

  const handleUserLogOut = () => {
    userLogOut();
  };

  /*   const handleResetPass = () => {
    resetPass();
   } */

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Your email
    </Tooltip>
  );

  const secondRenderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Your password
    </Tooltip>
  );

  return (
    <div className="login">
      <div className={!user ? "LogDiv" : "logDiv2"}>
        {!user ? <p className="logTitle"> Login</p> : ""}
        {!user ? (
          <p className="logText">
            Login to access your personalized vocabulary
          </p>
        ) : (
          ""
        )}
        <div className="emailinputDiv">
          {!user ? (
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <input
                id="email"
                className="logInput"
                type="text"
                name="mail"
                placeholder="Email address "
                value={email}
                onChange={handleEmailChange}
              ></input>
            </OverlayTrigger>
          ) : (
            ""
          )}
        </div>

        <div className="emailinputDiv">
          {!user ? (
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={secondRenderTooltip}
            >
              <input
                id="password"
                className="logInput"
                type={passwordType}
                name="mail"
                placeholder="Password "
                value={password}
                onChange={handlePasswordChange}
              ></input>
            </OverlayTrigger>
          ) : (
            ""
          )}
          {/*    <p onClick={handleResetPass}>Forgot your password?</p> */}

          <div className="showBut">
            {!user ? (
              <p className="showpasswordtext" onClick={togglePassword}>
                <span className="material-symbols-outlined visibility ">
                  visibility
                </span>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>

        {user ? (
          <div className="logOutDiv">
            <p className="logOutTitle">bis später!</p>
            <button
              className="logButOut"
              type="button"
              onClick={handleUserLogOut}
            >
              <span className="material-symbols-outlined logOutIcon">
                logout
              </span>
            </button>
          </div>
        ) : (
          <button
            className="logBut move"
            type="button"
            onClick={handleUserLogIn}
          >
            Login &nbsp; &nbsp;
            <span className="material-symbols-outlined logInIcon ">
              login
            </span>{" "}
          </button>
        )}
      </div>

      {!user ? (
        <Link to="/register" className="regLink move">
          Not a member yet? Click to register{" "}
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default Login;
