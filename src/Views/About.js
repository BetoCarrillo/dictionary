import React, { useRef, useState } from 'react'
import '../styles/about.css'
import linkedin from "../styles/images/linkedin.png"
import github from "../styles/images/github.png"
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';


function About() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div className="divAbout"
      
    /*   {
          setIsNavExpanded ? "divAbout hidden " : "shown divAbout"
        } */>
  <div className='aboutBrief'>
        <p>Project 3 brief</p>
  </div>
      <div>
 
        <p className='aboutContact'>Get in contact!</p>
        <hr style={{ color: 'white', backgroundColor: 'white', height: 2, borderColor: 'white' }} />
        <div className='aboutLogos '>
          <div>
            <a href="https://github.com/BetoCarrillo" target={"_blank"}>
             <div className="gitLogoDiv "><img src={github} alt="" height={55}></img>
            </div >
            <div className="githubflex">
              <div className="gitNameDiv overlay">
              Github
              </div>
            </div> 
           </a>
          </div>
          <div>
 <a href="https://www.linkedin.com/in/alberto-carrillo-ch/" target={"_blank"}>


            <div className=" linkLogoDiv">
              <img src={linkedin} alt="" height={55} ></img> 
            </div>
            <div className="linkedflex">
              <div className ="linkedNameDiv overlay" >
              LinkedIn
              </div>
              </div>
              </a>
          </div>
          <div>
             <div className=" mailLogoDiv">
                <span className="material-symbols-outlined" ref={target} onClick={() => setShow(!show)}>mail</span>     
              </div>
            <div className="mailflex"> <a href="mailto:alberto.carrillo01@gmail.com" target={"_blank"}>
               <div className="mailNameDiv overlay">
                  Mail
               </div>
              </a>                 
      <Overlay target={target.current} show={show} placement="top">
        {(props) => (
          <Tooltip className='mailpopover'  {...props}>
            alberto.carrillo01@gmail.com
          </Tooltip>
        )}
      </Overlay>
              
              </div>
          </div>
        
        </div>
             <hr className="botBreakLine" style={{ color: 'white',backgroundColor: 'white',height: 2, borderColor: 'white',}}/>
  </div>  
       
</div>
  )
}

export default About