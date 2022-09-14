import React from 'react';
import '../styles/vocab.css';
import { useState, useContext, useEffect } from "react";
import { AuthContext } from '../Context/authcontext';
import { collection, addDoc, query, onSnapshot, orderBy } from "firebase/firestore"; 
import {db} from '../firebaseconfig';

function Vocabulary() {
  const { user, setUser, userLogIn, userLogOut, resetPass } = useContext(AuthContext);
  const [comment, setComment] = useState("");
  const [commentDisplay, setCommentDisplay] = useState(null);

  const handleCommentChange = (e) => {
    setComment(e.target.value);

  };
  
  const handleSendComment = async () => {
    const commentObj = {
      text: comment,
      date: new Date().toLocaleDateString(),
      user: user.email,
    };
    try {
  const docRef = await addDoc(collection(db, "users" + user.uid),commentObj);
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
    }
  };
  const readComments = async () => {
const q = query(collection(db, "users" + user.uid), orderBy("text", "desc"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const comments = [];
  querySnapshot.forEach((doc) => {
      comments.push(doc.data());
  });
 setCommentDisplay(comments);
});

  };
    useEffect(() => {
    readComments();
  }, []);
  return (
    <div className="vocabDiv">
      <div>
        <h1 className='vocabTitle'>Vocabulary</h1>

        {commentDisplay && commentDisplay.map((text, i) => (
<div key={i}>
            <p>{text.text}</p>      
</div>
        ))}
            <input type="text" value={comment} onChange={handleCommentChange}></input>
            <button onClick={handleSendComment}>Now try a sentence!</button>
            
      </div>

    </div>
  )
}

export default Vocabulary