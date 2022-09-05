import { createContext, useState } from "react";
import config from '../config';


export const DictionaryContext = createContext();

export const DictionaryContextProvider = (props) => {

  const [search, setSearch] = useState("");
  const [words, setWords] = useState(null);
const [error, setError] = useState(null)
  const fetchData = async (mySearch) => {
  const myHeaders = new Headers()
  myHeaders.append("X-Secret", config)

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
};
           
    try {
      const response = await fetch(`https://cab-cors-anywhere.herokuapp.com/api.pons.com/v1/dictionary?q=${mySearch}&l=deen&in=de&fm=1&ref=false&language=en`, requestOptions);
      console.log('response', response)

      if (response.status === 204) {
        setError("not found")
      } else {
        setError(null)
         
        const result = await response.json();
      /*   console.log(result[0].hits[0].roms[0].arabs) */
      console.log(result)
     setWords(result)
      
      /*       setSearch(result.results); */
      }
      
    } catch (error) {
      /* console.log(error)
      setError(error) */
    } 
  };    
                
  return (
    <DictionaryContext.Provider value = {{search, setSearch, words, setWords, fetchData, error}}>{props.children}</DictionaryContext.Provider>
  );

};