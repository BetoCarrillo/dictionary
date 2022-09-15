import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../styles/images/logo.png";
import { AuthContext } from "../Context/authcontext";

function NavBar() {
  let [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleLinkClick = (e) => {
    setIsNavExpanded(!isNavExpanded);
  };
  const { user } = useContext(AuthContext);

  return (
    <div>
      <nav className={isNavExpanded ? "navigation expanded" : "navigation"}>
        <div className="ponsLogo">
          <div>
            <a
              href="https://es.pons.com/p/diccionario-en-linea/developers/api"
              className="brand-name font-link"
              target="blank"
            >
              <div>powered by</div>
              <img src={logo} alt="" height={30}></img>
            </a>
          </div>
        </div>

        <button
          className="navbarIcon"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {isNavExpanded ? (
            <span className="material-symbols-outlined icon"> close </span>
          ) : (
            <span className="material-symbols-outlined icon">menu</span>
          )}
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <NavLink to="/" onClick={handleLinkClick}>
                Words
              </NavLink>
            </li>
            {user ? (
              <li>
                <NavLink to="/vocabulary" onClick={handleLinkClick}>
                  Vocabulary
                </NavLink>
              </li>
            ) : (
              ""
            )}
            <li>
              {" "}
              <NavLink to="/about" onClick={handleLinkClick}>
                About
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/login" onClick={handleLinkClick}>
                {user ? "Logout" : "Login"}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
