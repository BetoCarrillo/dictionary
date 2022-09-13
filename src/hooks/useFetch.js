import { useState } from 'react';
import config from '../config';

const useFetch = (url) => {
    
const [mySearch, setMySearch] = useState("");
  const [words, setWords] = useState(null);
  const [refetch, setRefetch] = useState(false);

  const fetchData = async (mySearch) => {
    setRefetch(false)
    const myHeaders = new Headers();
    myHeaders.append("X-Secret", config);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
};
           
    try {
      const response = await fetch(url, requestOptions);
      console.log('response', response)

      if (response.status !== 200) {
        console.log("response status is not 200");
        setRefetch(true);
      } else {
        const result = await response.json();
        console.log(result);
        setWords(result);
        
      }
    } catch (error) {
      console.log(error)
     
    } 
    };    
    return {mySearch, words, refetch, fetchData, setMySearch }
}

export default useFetch; 