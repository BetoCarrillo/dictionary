import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { DictionaryContext } from '../Context/dictionarycontext';

function Random({}) {
  const { fetchData, refetch } = useContext(DictionaryContext)
  const controller = new AbortController();
  const signal = controller.signal;

  const fetchDataRandom = async () => {
    
    try {
      const response = await fetch(`https://random-word-api.herokuapp.com/word?lang=de`, {signal: signal,
              
            });
        const randomResult = await response.json();
      console.log(randomResult)
      await fetchData(randomResult)
      
    } catch (error) {
      console.log(error)
    } 
  };    

  useEffect(() => {
/*     console.log("refetch changed"); */
    
    if (refetch) {
      console.log("refetching");
      fetchDataRandom();
      
    } else {
      return;
    }

    return () => {
      controller.abort();
    };
  }, [refetch]);

  return (
      <div>         
          <Button className='randomButton move' onClick={fetchDataRandom}>
              Get random..</Button>
        
   
    </div>
  )
}

export default Random