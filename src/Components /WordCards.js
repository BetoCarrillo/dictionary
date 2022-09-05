import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import MoreDef from './MoreDef';
import '../styles/wordcards.css'



function WordCards(words ) {

  /*     console.log(word[0].hits.type) */
  
  const roms = words.words[0].hits[0]?.roms
  console.log('roms', roms)
  return (
    
     <div className='wordcardsdiv'>
          {<Card className='cardstyle' style={{ width: '22rem' }}>
      <Card.Body>
              <Card.Title className='cardtitle'>{words.words[0].hits[0]?.roms ? words.words[0].hits[0].roms[0].headword : "Title"}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{
            
            words.words[0].hits[0]?.roms ? words.words[0].hits[0].roms[0].wordclass : "Subtitle"
            
            }</Card.Subtitle>
              <Card.Text>
                 
            <div dangerouslySetInnerHTML={{
              __html:
                
                words.words[0].hits[0]?.roms ? words.words[0].hits[0].roms[0].arabs[0].translations[0].target : "Text"
                
            }} />
               
            
            
              </Card.Text>
             
              
           
              <div className='logos'>
            {words.words[0].hits[0]?.roms && <MoreDef words={words} />}
            <Card.Link href="#" className='addSen' ><span className="material-symbols-outlined cardLogo addLogo" >
add_circle 
</span> </Card.Link>
              </div>
               
      </Card.Body>
      </Card> }
 
     </div>

 


   );
 
}

export default WordCards