import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import MoreDef from './MoreDef';
import '../styles/wordcards.css'



function WordCards(words,target, cleandef ) {



  let targets = words.words[0].hits[0]?.roms[0].arabs[0].translations;


  /* console.log(words.words[0].hits[0].roms[0].arabs[0].translations) */

  /*     console.log(word[0].hits.type) */

  /*     <div>
         {(words && words.map((word, i) => {
          return <div key={i}>
            <WordCards   words={words} />
          </div>
         }))}
      </div> */
  
  const roms = words.words[0].hits[0]?.roms
  console.log('roms', roms)
  
  return (
    
    <div className='wordcardsdiv'>
    
          {<Card className='cardstyle' style={{ width: 'auto' }}>
      <Card.Body>
              <Card.Title className='cardtitle'>{words.words[0].hits[0]?.roms ? words.words[0].hits[0].roms[0].headword :  words.words[0].hits[0].target}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{
            
            words.words[0].hits[0]?.roms ? words.words[0].hits[0].roms[0].wordclass : ""
            
            }</Card.Subtitle>
          <Card.Text>   
            {(targets.map((target, i) => {
                let alldef = target.target
              let cleandef = alldef.replace(/sth/g, "something ").replace(/(<([^>]+)>)/gi, "").replace(/#/g, "").replace(/&/g, "").replace(/[0-9]/g, "").replace(/;/g, "'");
              return (cleandef)
            }).join("\n"))}
            <div dangerouslySetInnerHTML={{__html: words.words[0].hits[0]?.roms ? cleandef: words.words[0].hits[0].source
            }} />
              </Card.Text>
          <div className='logos'>
            { <MoreDef words={words} />}
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

