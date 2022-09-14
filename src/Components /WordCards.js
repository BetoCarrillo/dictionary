import React, { useContext, useState } from 'react'
import Card from 'react-bootstrap/Card';
import {useNavigate } from 'react-router-dom';
import MoreDef from './MoreDef';
import '../styles/wordcards.css'
import { collection, addDoc, query, onSnapshot, orderBy } from "firebase/firestore"; 
import {db} from '../firebaseconfig';
import { AuthContext } from '../Context/authcontext';

function WordCards(words, target, cleandef,) { 
  const [comment, setComment] = useState("");
  const [commentDisplay, setCommentDisplay] = useState(null);
  const redirectvocab = useNavigate();
   const { user, setUser } = useContext(AuthContext);
 
 
  let roms = words.words[0].hits[0].roms
 /*  console.log('roms', roms)  */
  let targets = roms ? words.words[0].hits[0]?.roms[0]?.arabs[0].translations : "";  
 /*  console.log('targets', targets) */
  let cleantarget = words.words[0].hits[0].target;
 

  const handleSendWord = async () => {
     redirectvocab("/vocabulary");
    const commentObj = {
      text: roms ? words.words[0].hits[0].roms[0].headword : cleantarget.replace(/(<([^>]+)>)/gi, ""),
      definition: target,
    };
    try {
  const docRef = await addDoc(collection(db, "users" + user.uid),commentObj);
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
    }
  }; 
  const readComments = async () => {
    const q = query(collection(db, "users" + user.uid));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const comments = [];
  querySnapshot.forEach((doc) => {
    comments.push(doc.data());
  });
 setCommentDisplay(comments);
});
  
  };
  
 
  return (
    
    <div className='wordcardsdiv'>
    
          {<Card className='cardstyle' style={{ width: 'auto' }}>
      <Card.Body>
              <Card.Title className='cardtitle'>{roms ? words.words[0].hits[0].roms[0].headword :  cleantarget.replace(/(<([^>]+)>)/gi, "")}</Card.Title>
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
            <Card.Link href="#" className='addSen'onClick={handleSendWord} ><span className="material-symbols-outlined cardLogo addLogo" >
add_circle 
</span> </Card.Link>
              </div>
               
      </Card.Body>
      </Card> }
 
     </div>
   );
 
}

export default WordCards

