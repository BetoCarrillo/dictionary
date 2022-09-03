import React from 'react'

function SearchBar({ setSearch }) {
/*   const handleOnChange = (e) => { setSearch(e.target.value) }; */
  
   const handleEnter = (event) => {
    if (event.key === 'Enter') {
      setSearch(event.target.value)
     
    }
  }
  return (
<div className='move' >
      <input className='SearchButton' placeholder='Search words..' onKeyDown={handleEnter}
    ></input>
</div>

   

   
  )
}

export default SearchBar