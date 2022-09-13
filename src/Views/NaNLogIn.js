import React from 'react'
import { Link } from 'react-router-dom'

function NaNLogIn() {
    return (
      
        <div>
            <div className='NaNSen'>
               Ups! Check your credentials
        </div>
        <div>
          <Link to="/login" className='tryAgainLink'>Try again</Link>
        </div>
       
</div>

   
  )
}

export default NaNLogIn