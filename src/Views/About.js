import React from 'react'
import '../styles/about.css'

function About() {
  return (
    <div className='divAbout' >
      <div className='aboutBrief'>
        <p>Project 3 brief</p>
        
      </div>
      
      <div >
        <p className='aboutContact'>Get in contact!</p>
        <hr  style={{
    color: 'white',
    backgroundColor: 'white',
    height: 2,
    borderColor : 'white'
        }} />
<div className='aboutLogos'>
  
</div>

             <hr  style={{
    color: 'white',
    backgroundColor: 'white',
          height: 2,
    
          borderColor: 'white',
}}/>
      </div>  
       
    </div>
  )
}

export default About