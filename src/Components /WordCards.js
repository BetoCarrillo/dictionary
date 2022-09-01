import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function WordCards(words) {


/*     console.log(word[0].hits.type) */
  return (
     <div>
          <Card style={{ width: '16rem' }}>
      <Card.Body>
               <Card.Title>{words.words[0].hits[0].roms[0].headword}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{words.words[0].hits[0].roms[0].wordclass}</Card.Subtitle>
        <Card.Text>
              {words.words[0].hits[0].roms[0].arabs[0].translations[0].target}
         </Card.Text>
         <Link to={`${words.words[0].hits[0].roms[0].headword}`}><Card.Link href={`${words.words[0].hits[0].roms[0].headword}`}>More definitions</Card.Link>
         </Link>
            <Card.Link href="#" className='addSen'><span className="material-symbols-outlined addLink addLogo">
add_circle 
</span>  </Card.Link>
      </Card.Body>
      </Card> 
 
     </div>

 


   );
 
}

export default WordCards