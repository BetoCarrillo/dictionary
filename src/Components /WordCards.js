import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import MoreDef from './MoreDef';



function WordCards(words ) {

/*     console.log(word[0].hits.type) */
  return (
     <div>
          <Card style={{ width: '14rem' }}>
      <Card.Body>
               <Card.Title>{words.words[0].hits[0].roms[0].headword}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{words.words[0].hits[0].roms[0].wordclass}</Card.Subtitle>
              <Card.Text>
                 
                 <div dangerouslySetInnerHTML={{ __html:  words.words[0].hits[0].roms[0].arabs[0].translations[0].target} }/>
                   {/*  {words.words[0].hits[0].roms[0].arabs[0].translations[0].target} */}
            
            
              </Card.Text>
             
              
            {/*   <Link state={words} to={`${words.words[0].hits[0].roms[0].headword}`}>
                More info
         </Link> */}
              <div className='logos'>
                 <MoreDef words={words} />
            <Card.Link href="#" className='addSen' ><span className="material-symbols-outlined cardLogo addLogo" >
add_circle 
</span> </Card.Link>
              </div>
               
      </Card.Body>
      </Card> 
 
     </div>

 


   );
 
}

export default WordCards