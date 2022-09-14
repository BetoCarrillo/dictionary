import React from "react";
import "../styles/vocab.css";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../Context/authcontext";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebaseconfig";
import { Tooltip } from "react-bootstrap";

function Vocabulary() {
  const { user, setUser, userLogIn, userLogOut, resetPass } =
    useContext(AuthContext);
  const [comment, setComment] = useState("");
  const [commentDisplay, setCommentDisplay] = useState(null);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSendComment = async (e) => {
    const newcomment = doc(db, "users" + user.uid, `${e.currentTarget.id}`);
    await updateDoc(newcomment, {
      comments: comment,
    });
  };

  const handleDeleteComment = async (e) => {
    await deleteDoc(doc(db, "users" + user.uid, `${e.currentTarget.id}`));
  };

  const readComments = async () => {
    const q = query(collection(db, "users" + user.uid), orderBy("text", "asc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const comments = [];
      querySnapshot.forEach((doc) => {
        comments.push({ data: doc.data(), id: doc.id });
        /*    console.log("doc.id", doc.id); */
      });
      setCommentDisplay(comments);
    });
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      alert(
        `Please add your input to the specific word, by clicking the purple button right next to each row`
      );
    }
  };

  useEffect(() => {
    readComments();
  }, []);

  return (
    <div className="vocabDiv">
      <div className="vocabTitleDiv">
        <h1 className="vocabTitleText">Vocabulary</h1>
      </div>

      <div className="vocabTableDiv">
        <table className="vocabTable">
          <thead className="vocabTableTitle">
            <tr>
              <th className="vocabFirstWord">Words</th>
              <th className="vocabFirstDef">Definitions</th>
              <th className="vocabFirstCom">Comments</th>
              <th className="vocabFirstAdd"></th>
            </tr>
          </thead>
        </table>
        {commentDisplay &&
          commentDisplay.map((comment, i) => (
            <div key={i}>
              <table className="vocabTable">
                <thead>
                  <tr className="vocabFullRow">
                    <th className="vocabWords">{comment.data.text}</th>
                    <th className="vocabDef">{comment.data.definition}</th>
                    <th className="vocabCom">{comment.data.comments}</th>
                    <th className="vocabAdd">
                      <span
                        className="material-symbols-outlined addsymbol"
                        onClick={handleSendComment}
                        id={comment.id}
                      >
                        edit{" "}
                      </span>
                      <span
                        className="material-symbols-outlined deletesymbol"
                        onClick={handleDeleteComment}
                        id={comment.id}
                      >
                        delete{" "}
                      </span>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          ))}

        <div className="inputDiv">
          <input
            className="sentenceInput"
            placeholder="Write a sentence or comment"
            type="text"
            value={comment}
            onKeyDown={handleEnter}
            onChange={handleCommentChange}
          ></input>{" "}
        </div>
      </div>
    </div>
  );
}

export default Vocabulary;
