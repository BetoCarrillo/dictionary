import React, { useContext } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { DictionaryContext } from '../Context/dictionarycontext';

function Random({ setSearch }) {
    const { fetchData, error, words} = useContext(DictionaryContext) 

    const fetchDataRandom = async () => {
    
    try {
            const response = await fetch(`https://random-word-api.herokuapp.com/word?lang=de`);
        const randomResult = await response.json();
      console.log(randomResult)
      /* setSearch(randomResult)   */
      await fetchData(randomResult)
      console.log('error', error)
 /*      (!fetchData ? fetchDataRandom() : setSearch(randomResult) ) */
     if (error) {fetchDataRandom()
     } 
       /*  setSearch(randomResult) */
   /*    fetchData(setSearch) */
    } catch (error) {
      console.log(error)
    } 
  };    

  
  return (
      <div>         
          <Button className='randonButton move' onClick={fetchDataRandom}>
              Get random..</Button>
        
   
    </div>
  )
}

export default Random