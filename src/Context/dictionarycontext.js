/* 
import { createContext, useState } from "react";
import config from '../config';


export const DictionaryContext = createContext();


export const DictionaryContextProvider = (props) => {
  console.log("props :>> ", props);


  const [search, setSearch] = useState("");
    const [words, setWords] = useState("");
    

    const fetchData = async () => {
  const myHeaders = new Headers()
  myHeaders.append("X-Secret", config)

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
};
           
    try {
            const response = await fetch(`https://cab-cors-anywhere.herokuapp.com/api.pons.com/v1/dictionary?q=${search}&l=deen&in=de&fm=1&ref=false&language=en`, requestOptions);
      const result = await response.json();
   
      console.log(result)
      setWords(result)

    
    } catch (error) {
      console.log(error)
    } 
  };    

  return (
    <DictionaryContextProvider
      value={{
        search,
        setSearch,
        words,
        setWords,
        fetchData,
      }}
    >
      {props.children}
    </DictionaryContextProvider>
  );
}; */