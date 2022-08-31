import React from 'react'
import Card from 'react-bootstrap/Card';

function WordCards(words) {
    console.log(words); 
 
/*     console.log(word[0].hits.type) */
   return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
               <Card.Title>{/* {words.words[0].hits[0].roms[0].headword} */}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{/* {words.words[0].hits[0].roms[0].wordclass} */}</Card.Subtitle>
        <Card.Text>
            {/*   {words.words[0].hits[0].roms[0].arabs[0].translations[0].target} */}
        </Card.Text>
        <Card.Link href="#">learn more</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default WordCards