import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import MoreDef from "./MoreDef";
import "../styles/wordcards.css";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebaseconfig";
import { AuthContext } from "../Context/authcontext";

function WordCards(words, target, cleandef) {
  const redirectvocab = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  let roms = words.words[0].hits[0].roms;
  /*  console.log('roms', roms)  */
  let targets = roms
    ? words.words[0].hits[0]?.roms[0]?.arabs[0].translations
    : "";
  /*  console.log('targets', targets) */
  let cleantarget = words.words[0].hits[0].target;

  const handleSendWord = async () => {
    redirectvocab("/vocabulary");
    const commentObj = {
      text: roms
        ? words.words[0].hits[0].roms[0].headword
        : cleantarget.replace(/(<([^>]+)>)/gi, ""),
      definition: roms
        ? words.words[0].hits[0]?.roms[0]?.arabs[0].translations[0].target
            .replace(/(<([^>]+)>)/gi, "")
            .replace("·", "")
        : words.words[0]?.hits[0].source.replace(/(<([^>]+)>)/gi, ""),
      comments: "",
    };
    try {
      const docRef = await addDoc(
        collection(db, "users" + user.uid),
        commentObj,
        orderBy("text", "desc")
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="wordcardsdiv">
      {
        <Card className="cardstyle" style={{ width: "auto" }}>
          <Card.Body>
            <Card.Title className="cardtitle">
              {roms
                ? words.words[0].hits[0].roms[0].headword
                : cleantarget.replace(/(<([^>]+)>)/gi, "")}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {roms ? words.words[0].hits[0].roms[0].wordclass : ""}
            </Card.Subtitle>
            <Card.Text>
              {targets !== ""
                ? targets
                    .map((target, i) => {
                      let alldef = target.target;
                      let cleandef = alldef
                        .replace(/sth/g, "something ")
                        .replace(/(<([^>]+)>)/gi, "")
                        .replace(/#/g, "")
                        .replace(/&/g, "")
                        .replace(/[0-9]/g, "")
                        .replace(/;/g, "'");
                      return cleandef;
                    })
                    .join("\n")
                : words.words[0]?.hits[0].source.replace(/(<([^>]+)>)/gi, "")}
            </Card.Text>
            <div className="logos">
              {<MoreDef words={words} roms={roms} />}
              <Card.Link href="#" className="addSen" onClick={handleSendWord}>
                <span className="material-symbols-outlined cardLogo addLogo">
                  add_circle
                </span>{" "}
              </Card.Link>
            </div>
          </Card.Body>
        </Card>
      }
    </div>
  );
}

export default WordCards;
