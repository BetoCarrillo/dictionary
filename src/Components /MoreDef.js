import React, { useState } from "react";
/* import { useParams } from 'react-router-dom' */
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "../styles/modal.css";

function MoreDef({ words, target, roms }) {
  /*   let words = useParams() */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let totalinfo = roms ? words.words[0].hits[0]?.roms[0].headword_full : "";
  /*
  const totalinfo = words.words[0].hits[0]?.roms[0].headword_full*/

  let cleanheadword = totalinfo
    .replace("", "")
    .replace(/</g, "")
    .replace(/>/g, "")
    .replace(/span/g, "")
    .replace(/sup/g, " ")
    .replace("wordclass", "")
    .replace(/class/, "")
    .replace(/=/g, "")
    .replace(/span class/g, "")
    .replace(/class/g, "~")
    .replace(/title/g, "")
    .replace("/", "")
    .replace("/", "")
    .replace("/", "")
    .replace("/", "")
    .replace("/", "")
    .replace("/", "")
    .replace("/", "")
    .replace("/", "")
    .replace("/", "")
    .replace(/"/g, " ")
    .replace(/acronym/g, "")
    .replace(/ {3}/g, "")
    .replace(/ {2}/g, " ")
    .replace(/ {1}/g, " ")
    .replace(/[0-9]/g, "");
  function replaceWithBr() {
    return cleanheadword
      .replace(/~/g, "<br />")
      .replace("flexion", "<br />flexion");
  }

  return (
    <div className="infoLogo">
      <span onClick={handleShow} className="material-symbols-outlined cardLogo">
        info
      </span>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          centered
          className="modalbackground "
        >
          <Modal.Header
            closeButton
            className="modalbackgroundcolor modaltitle "
          >
            {" "}
            {roms
              ? words.words[0].hits[0].roms[0].headword
              : words.words[0].hits[0].target}
          </Modal.Header>
          <Modal.Body className="modalbackgroundcolor modaltext">
            {roms ? (
              <div dangerouslySetInnerHTML={{ __html: replaceWithBr() }} />
            ) : (
              <div
                dangerouslySetInnerHTML={{
                  __html: words.words[0]?.hits[0].source,
                }}
              />
            )}

            {/*       <div>
              {words.words[0].hits[0]?.roms[0] ?  <div dangerouslySetInnerHTML={{ __html: replaceWithBr() }}
              /> : "words.words[0]?.hits[0]?.source"}
              
 */}
            {/*      {words.words[0].hits[0]?.roms[0] ? words.words[0].hits[0]?.roms[0].headword : words.words[0].hits[0].source }

             */}
            {/*      
              { words.words[0].hits[0]?.roms[0] ? `Lang ${words.words[0].lang}` : "words.words[0]?.hits[0]?.source "} 
</div>         */}
            {"lang " + words.words[0].lang}
          </Modal.Body>
          <Modal.Footer className="modalbackgroundcolor modalFooter"></Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default MoreDef;
