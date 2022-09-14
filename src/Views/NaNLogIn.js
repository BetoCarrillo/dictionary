import React from 'react'
import { Link } from 'react-router-dom'

function NaNLogIn() {
    return (
      
        <div className='NaNDiv'>
            <div className='NaNSen'>
               Ups! Check your credentials
        </div>
        <div className='NaNSen'>
          <Link to="/login" className='tryAgainLink'>Try again</Link>
        </div>
       
</div>

   
  )
}

export default NaNLogIn