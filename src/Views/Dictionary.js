
import { useEffect, useState } from 'react';
/* import { useEffect } from 'react'; */
import SearchBar from '../Components /SearchBar'
import WordCards from '../Components /WordCards';
import config from '../config';


function Dictionary() {
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
            const response = await fetch(`https://cab-cors-anywhere.herokuapp.com/api.pons.com/v1/dictionary?q=${search}&l=deen&in=de&fm=1&ref=true&language=en`, requestOptions);
      const result = await response.json();
      /*   console.log(result[0].hits[0].roms[0].arabs) */
      console.log(result)
      setWords(result)

      /*       setSearch(result.results); */
    } catch (error) {
      console.log(error)
    } 
  };    
                  
  useEffect(() => {
    fetchData();
  }, [ search]);
         
  return (
<div>
      <SearchBar setSearch={setSearch} />
      <div>
         {(words && words.map((word, i) => {
          return <div key={i}>
            <WordCards   words={words} />
          </div>
        }))}

     </div> 
  
</div>
    
  )
}

export default Dictionary