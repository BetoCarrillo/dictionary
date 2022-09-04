import React from 'react'
import Button from 'react-bootstrap/esm/Button';

function Random({fetchData, setSearch}) {

    const fetchDataRandom = async () => {
    
    try {
            const response = await fetch(`https://random-word-api.herokuapp.com/word?lang=de`);
        const randomResult = await response.json();
      console.log(randomResult)
      setSearch(randomResult)
 /*      (!fetchData ? fetchDataRandom() : setSearch(randomResult) ) */
     if (!fetchData) {fetchDataRandom()
     } 
       /*  setSearch(randomResult) */
   /*    fetchData(setSearch) */
    } catch (error) {
      console.log(error)
    } 
  };    

  
  return (
      <div className='move'>         
          <Button className='randonButton' onClick={fetchDataRandom}>
              Get random..</Button>
        
   
    </div>
  )
}

export default Random