import React, { useState } from 'react'
/* import { useParams } from 'react-router-dom' */
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';


function MoreDef({words}) {
  /*   let words = useParams() */
   const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
  

  let headword = words.words[0].hits[0].roms[0].headword_full
  let cleanheadword = headword.replace("", " ").replace(/</g, " ").replace(/>/g, " ").replace(/span/g, " ").replace(/class/, " ").replace(/=/, "").replace(/=/g, " ").replace(/class/g, "~").replace(/title/g, " ").replace("/", " ").replace("/", " ").replace("/", " ").replace("/", " ").replace("/", " ").replace("/", " ").replace("/", " ").replace("/", " ").replace("/", " ").replace(/"/g, " ").replace(/acronym/g, " ")

  function replaceWithBr() {
    return cleanheadword.replace(/~/g, "<br />");
  }

    
  return (
 /*    <div>
      <Button state={words}  variant="outline-success" to={`${words.words[0].hits[0].roms[0].headword}`}>More info</Button>
          
    </div> */

    <div className='infoLogo'>
      <span  onClick={handleShow} class="material-symbols-outlined cardLogo">
info
</span>

 <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton> {words.words[0].hits[0].roms[0].headword}
        </Modal.Header>


        <Modal.Body>
<div>
            <div dangerouslySetInnerHTML={{ __html: replaceWithBr() }}
            />  
           {`Lang: ${ words.words[0].lang }`}
</div>


      
        
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default MoreDef