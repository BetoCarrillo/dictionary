
import { useContext, useEffect} from 'react';
import Random from '../Components /Random';
import SearchBar from '../Components /SearchBar'
import WordCards from '../Components /WordCards';
import { AuthContext } from '../Context/authcontext';
import { DictionaryContext } from '../Context/dictionarycontext';


function Dictionary() {
  const {user} = useContext(AuthContext)
 
  const {search, setSearch, words, setWords, fetchData} = useContext(DictionaryContext)
/*       
  useEffect(() => {
    fetchData();
  }, [search]); */
         
  return (
    <div>
      {user ? <div className='welcome'> <div> Welcome {user.name}! </div> <div> Now you can add words to your vocabulary </div></div> : ""} 


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
    
    {user ? "" : <div className='welcomenotlogin'>
        Don't forget to login to add words to your vocabulary
      </div>} 
</div>
    
  )
}

export default Dictionary