import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import MoreDef from './MoreDef';
import '../styles/wordcards.css'



function WordCards(words,target, cleandef,) { 
 
 
  let roms = words.words[0].hits[0].roms
  console.log('roms', roms) 
  let targets = roms ? words.words[0].hits[0]?.roms[0]?.arabs[0].translations : "";  
  console.log('targets', targets)
 
  return (
    
    <div className='wordcardsdiv'>
    
          {<Card className='cardstyle' style={{ width: 'auto' }}>
      <Card.Body>
              <Card.Title className='cardtitle'>{roms ? words.words[0].hits[0].roms[0].headword :  words.words[0].hits[0].target}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{
            
            roms ? words.words[0].hits[0].roms[0].wordclass : ""
            
            }</Card.Subtitle>
          <Card.Text>  

            {targets !== "" ? (targets.map((target, i) => {
              let alldef = target.target
              let cleandef = alldef.replace(/sth/g, "something ").replace(/(<([^>]+)>)/gi, "").replace(/#/g, "").replace(/&/g, "").replace(/[0-9]/g, "").replace(/;/g, "'");
              return (cleandef)
            }).join("\n")) : <div dangerouslySetInnerHTML={{ __html: words.words[0]?.hits[0].source }}/>}
              </Card.Text>
          <div className='logos'>
            { <MoreDef words={words} roms={roms} />}
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

