import React, { useState } from 'react'
/* import { useParams } from 'react-router-dom' */
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import '../styles/modal.css'


function MoreDef({words}) {
  /*   let words = useParams() */
   const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
  

  let headword = words.words[0].hits[0].roms[0].headword_full
  let cleanheadword = headword.replace("", " ").replace(/</g, " ").replace(/>/g, " ").replace(/span/g, " ").replace("wordclass", " ").replace(/class/, " ").replace(/=/, "").replace(/=/g, " ").replace(/class/g, "~").replace(/title/g, " ").replace("/", " ").replace("/", " ").replace("/", " ").replace("/", " ").replace("/", " ").replace("/", " ").replace("/", " ").replace("/", " ").replace("/", " ").replace(/"/g, " ").replace(/acronym/g, " ")

  function replaceWithBr() {
    return cleanheadword.replace(/~/g, "<br />");
  }

  return (

    <div className='infoLogo'>
      <span  onClick={handleShow} className="material-symbols-outlined cardLogo">
info
      </span>
      <div  >
    <Modal show={show} onHide={handleClose} centered className='modalbackground '>
        <Modal.Header closeButton className='modalbackgroundcolor modaltitle '> {words.words[0].hits[0]?.roms[0].headword}
        </Modal.Header>
        <Modal.Body className='modalbackgroundcolor modaltext'>
<div>
            <div dangerouslySetInnerHTML={{ __html: replaceWithBr() }}
            />  
           {`Lang ${ words.words[0].lang }`}
</div>        
          </Modal.Body>
          <Modal.Footer className='modalbackgroundcolor modalFooter' ></Modal.Footer>
      </Modal>     
      </div>


    </div>
  )
}

export default MoreDef