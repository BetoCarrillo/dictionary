import React, { useContext } from 'react'
import { DictionaryContext } from '../Context/dictionarycontext'

function SearchBar() {
/*   const handleOnChange = (e) => { setSearch(e.target.value) }; */
    const {search, setSearch, words, setWords, fetchData} = useContext(DictionaryContext)

   const handleEnter = (event) => {
    if (event.key === 'Enter') {
      /* setSearch(event.target.value) */
     fetchData(event.target.value)
    }
  }
  return (
<div >
      <input className='SearchButton move' placeholder='Search word..' onKeyDown={handleEnter}
    ></input>
</div>

   

   
  )
}

export default SearchBar