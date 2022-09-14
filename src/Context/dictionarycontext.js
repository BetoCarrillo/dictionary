import { createContext, useState } from "react";
import config from '../config';


export const DictionaryContext = createContext();

export const DictionaryContextProvider = (props) => {

  const [search, setSearch] = useState("");
  const [words, setWords] = useState(null);
   const [loader, setLoader] = useState(false);
  const [refetch, setRefetch] = useState(false);
    const [error, setError] = useState(null);

  const fetchData = async (mySearch) => {
    setRefetch(false)
    const myHeaders = new Headers();
    myHeaders.append("X-Secret", config);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
};
           
    try {
      const response = await fetch(`https://cab-cors-anywhere.herokuapp.com/api.pons.com/v1/dictionary?q=${mySearch}&l=deen&in=de&fm=1&ref=false&language=en`, requestOptions);
       setLoader(true);
      /* console.log('response', response) */

      if (response.status !== 200) {
        /* console.log("response status is not 200"); */
        setRefetch(true);
        
      } else {
        const result = await response.json();
/*         console.log(result); */
        setWords(result);
        setLoader(false);
      }
    } catch (error) {
    /*   console.log(error) */
      setError(error);
    } 
  };    
                
  return (
    <DictionaryContext.Provider value = {{search, setSearch, words, setWords, fetchData, refetch, setLoader, loader, setError, error }}>{props.children}</DictionaryContext.Provider>
  );

};