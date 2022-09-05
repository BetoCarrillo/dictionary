
import { useContext, useEffect} from 'react';
import Random from '../Components /Random';

import SearchBar from '../Components /SearchBar'
import WordCards from '../Components /WordCards';
import { DictionaryContext } from '../Context/dictionarycontext';


function Dictionary() {
 
  const {search, setSearch, words, setWords, fetchData} = useContext(DictionaryContext)
/*       
  useEffect(() => {
    fetchData();
  }, [search]); */
         
  return (
    <div>
  <div className='divBar '>
        <div className=' buttonsBar' > 
   <SearchBar setSearch={setSearch} />
    < Random setSearch={setSearch} fetchData={fetchData}  />
</div>
     
  </div>
    
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