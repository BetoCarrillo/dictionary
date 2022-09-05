import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import '../styles/navbar.css'
import logo from "../styles/images/logo.png"


function NavBar() {
  let [isNavExpanded, setIsNavExpanded] = useState(false);
  

  const handleLinkClick = (e) => {
 setIsNavExpanded(!isNavExpanded);
  }

  return (
   
    <div>
      
      <nav className={
          isNavExpanded ? "navigation expanded" : "navigation"
        }>
        <div className='ponsLogo'>
          <div>
             <a href="https://es.pons.com/p/diccionario-en-linea/developers/api" className="brand-name font-link" target="blank">
              <div>
              powered by
            </div>
            <img src={logo} alt="" height={30}></img> 
          
           </a>
          </div>
         
         
   </div>
     
     <button className="navbarIcon"  onClick={() => {
          setIsNavExpanded(!isNavExpanded);
     }}>
       {
          isNavExpanded ? <span class="material-symbols-outlined icon"> close </span> :  <span className="material-symbols-rounded icon"> menu </span>
        }
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul>
         <li>
           <NavLink to="/" onClick={handleLinkClick}>
             Words
           </NavLink>
         </li>
<li>    <NavLink to="/vocabulary" onClick={handleLinkClick}>
           My Vocabulary
           </NavLink>
         </li> 
         <li>    <NavLink to="/login" onClick={handleLinkClick}>Login
           </NavLink>
         </li>
         <li>    <NavLink to="/about" onClick={handleLinkClick}>
           About
           </NavLink>
     </li>
        </ul>
      </div>
      </nav>
    </div>
  
   
  
  );
}

export default NavBar