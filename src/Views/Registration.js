import React, { useContext, useState } from "react";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Tooltip from "react-bootstrap/esm/Tooltip";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/authcontext";
import "../styles/login.css";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { user, setUser, registerNewUser } = useContext(AuthContext);
  const redirectLogin = useNavigate();
  const [passwordType, setPasswordType] = useState("password");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  /*  const handleNameChange = (e) => {
    setDisplayName(e.target.value);
  } */

  const handleRegister = () => {
    registerNewUser(email, password);
    redirectLogin("/", { replace: true });
  };

  const backToLog = () => {
    redirectLogin("/login");
  };

  const renderTooltipUser = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Pick any name
    </Tooltip>
  );

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Your email
    </Tooltip>
  );

  const secondRenderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      6 characters password
    </Tooltip>
  );

  return (
    <div>
      <div className="login">
        <div className="LogDiv">
          <span
            onClick={backToLog}
            className="material-symbols-outlined backRegBut"
          >
            arrow_back
          </span>
          <p className="logTitle"> Register</p>

          {/*     <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltipUser}
    >
      <input className="logInput" type="input" name="username"  placeholder='Username ' value={displayName} onChange={handleNameChange}></input>
        </OverlayTrigger> */}
          <div>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <input
                id="email"
                className="logInput"
                type="text"
                name="email"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              ></input>
            </OverlayTrigger>
          </div>
          <div>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={secondRenderTooltip}
            >
              <input
                id="password"
                className="logInput"
                name="password"
                placeholder="Password"
                type={passwordType}
                value={password}
                onChange={handlePasswordChange}
              ></input>
            </OverlayTrigger>
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

          <p className="termsText">Joining accepts terms & conditions</p>
          <button
            className="logBut move"
            type="button"
            onClick={handleRegister}
          >
            Create
          </button>
        </div>
      </div>{" "}
    </div>
  );
}

export default Registration;
