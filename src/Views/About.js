import React from 'react'
import '../styles/about.css'
import linkedin from "../styles/images/linkedin.png"
import github from "../styles/images/github.png"


function About() {

  
  return (
<div className='divAbout' >
  <div className='aboutBrief'>
        <p>Project 3 brief</p>
  </div>
  <div >
        <p className='aboutContact'>Get in contact!</p>
        <hr  style={{color: 'white',backgroundColor: 'white', height: 2, borderColor: 'white'}} />
        <div className='aboutLogos '>
          <div>
            <div className="gitLogoDiv ">
              <img src={github} alt="" height={55}></img>
            </div >
            <div className="githubflex">
              <div className="gitNameDiv overlay">
              Github
              </div>
            </div>
          </div>
          <div>
            <div className=" linkLogoDiv">
              <img src={linkedin} alt="" height={55} ></img> 
            </div>
            <div className="linkedflex">
              <div className ="linkedNameDiv overlay" >
              LinkedIn
              </div>
            </div>
          </div>
          <div>
             <div className=" mailLogoDiv">
                <span class="material-symbols-outlined" >mail</span>     
              </div>
              <div className="mailflex">
               <div className="mailNameDiv overlay">
                  Mail
               </div>
              
              </div>
          </div>
        
        </div>
             <hr className="botBreakLine" style={{ color: 'white',backgroundColor: 'white',height: 2, borderColor: 'white',}}/>
  </div>  
       
</div>
  )
}

export default About